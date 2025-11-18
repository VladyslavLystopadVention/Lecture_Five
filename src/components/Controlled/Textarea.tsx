import { useState } from "react";

export const Textarea = () => {

    const [text, setText] = useState('');
    console.log('Textarea changed value');

    return (
        <textarea value={text} onChange={(e) => { setText(e.target.value); }} />
    )

}