import { useEffect, useState } from "react"
import { getToggleOn } from "./ToggleState";

export const Toggler = () => {

    const [toggleOn, setToggleOn] = useState(false);

    useEffect(() => {
        const sub = getToggleOn().subscribe(setToggleOn);
        return () => sub.unsubscribe();
    }, []);

    return (
        <div>
            <p>Toggle mode is {toggleOn ? 'Good' : 'Herna'} </p>
            <button onClick={() => setToggleOn(!toggleOn)}>
                Toggle toggler mf 
            </button>
        </div>
    )
}