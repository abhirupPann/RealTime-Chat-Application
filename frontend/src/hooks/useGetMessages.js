import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { messagesState, selectedConvoState } from "../recoil/useConversation";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useRecoilState(messagesState);
	console.log(messages);
    const selectedConvo =  useRecoilValue(selectedConvoState);
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				if(selectedConvo) {
					const res = await fetch(`/api/messages/${selectedConvo._id}`);
					const data = await res.json();
					if (data.error) throw new Error(data.error);
					setMessages(data);
				}

			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConvo?._id) getMessages();
	}, [selectedConvo?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;