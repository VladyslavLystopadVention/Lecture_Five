import { useState, useEffect } from "react";
import { getToggleOn } from "./ToggleState";

export const TogglerDependant = () => {

    const [toggleOn, setToggleOnState] = useState(false);

    useEffect(() => {
        const sub = getToggleOn().subscribe(setToggleOnState);
        return () => sub.unsubscribe();
    }, []);
  
    return (
        <div>
        <h4>Dependent component</h4>
        <p>It sees toggle mode as: {toggleOn ? "ON" : "OFF"}</p>
        </div>
    )
}