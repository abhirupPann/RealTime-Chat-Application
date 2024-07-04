import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

import { selectedConvoState } from "../../recoil/useConversation";
import { useRecoilValue } from "recoil";

const Message = ({ message }) => {
	const { authUser } = useAuthContext(); //loggedin user
	const selectedConvo = useRecoilValue(selectedConvoState); //returns the convos
	const fromMe = message.senderId === authUser.userId;

	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePicture : selectedConvo?.profilePicture;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;