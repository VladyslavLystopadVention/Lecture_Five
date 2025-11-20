import { useEffect, useState } from "react"
import { type Chat, getChats } from "../global/Chats";

export const CurrentChats = () => {
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        const sub = getChats().subscribe(setChats);
        return () => sub.unsubscribe();
    }, [])

    return (
        <div>
            {chats.map((item, index) => ( <p key={`${item.id}-${index}`}>{item.topic}</p>))}
        </div>
    )
}