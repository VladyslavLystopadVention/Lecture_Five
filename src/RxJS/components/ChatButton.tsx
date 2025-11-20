import type { FC } from "react"
import { addChat, removeChat, type Chat } from "../global/Chats"

let politicsChat: Chat = { id: 'lol', topic: 'Politics' }
let booksChat: Chat = { id: 'lol2', topic: 'books' }
let filmsChat: Chat = { id: 'lol3', topic: 'films' }

export const AddChatButton: FC = () => {

    return (
        <>
            <button onClick={() => {
                addChat(politicsChat)
            }}>
                Add politics topic
            </button>

            <button onClick={() => {
                removeChat(politicsChat.id)
            }}>
                Remove politics topics
            </button>

            <button onClick={() => {
                addChat(booksChat)
            }}>
                Add book topic
            </button>

            <button onClick={() => {
                removeChat(
                    booksChat.id)
            }}>
                Remove books topics
            </button>

            <button onClick={() => {
                addChat(filmsChat)
            }}>
                Add films topic
            </button>

            <button onClick={() => {
                removeChat(filmsChat.id)
            }}>
                Remove films topics
            </button>
        </>
    )

}

