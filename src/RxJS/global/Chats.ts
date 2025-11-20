import { BehaviorSubject } from "rxjs";

type Topic = 'films' | 'books'| 'Politics';

export interface Chat {
    id: string;
    topic: Topic;
}

export const chats$ = new BehaviorSubject<Chat[]>([]);

export function addChat(chat: Chat){
    chats$.next([...chats$.value, chat]);
}

export function removeChat(id: string){
    chats$.next(chats$.value.filter(i => i.id !== id));
}

chats$.subscribe(items => console.log('Updated chats, ', items));

export const getChats = () => chats$.asObservable();