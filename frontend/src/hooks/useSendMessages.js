import { useState } from "react";
import { messagesState, selectedConvoState } from "../recoil/useConversation";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	// const { messages, setMessages, selectedConversation } = useConversation();
    const [messages, setMessages] = useRecoilState(messagesState);
    const selectedConvo =  useRecoilValue(selectedConvoState);
	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConvo._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;