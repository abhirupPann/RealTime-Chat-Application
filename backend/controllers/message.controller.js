import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessage = async(req, res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;  //receiverid
        const senderId = req.user._id; // getting this req.user._id from protecUser
        

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id); // as messages is an array we are using .push()
        }
        await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		


        // await newMessage.save();
        // await conversation.save();

        //this will run in parallel 
    
        res.status(201).json(newMessage)
    } catch (err) {
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const getMessage =  async(req, res)=>{
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages"); //Not reference, it is the actual value
        if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, userToChatId],
			});
		}

        res.status(200).json(conversation.messages);

        
    } catch (err) {
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}