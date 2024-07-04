import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import { selectedConvoState } from "../recoil/useConversation";

import notificationSound from "../assets/sound/notification.mp3";
import { useRecoilState } from "recoil";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useRecoilState(selectedConvoState);

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;