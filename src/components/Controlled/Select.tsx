import { useState } from "react";

type selectValue =
    'Night' |
    'Afternoon' |
    'Morning' |
    'Evening';

export const Select = () => {

    const [selected, setSelected] = useState<selectValue>('Evening');
    console.log('Select changed value!');

    return (
        <select onChange={(e) => {
            setSelected(e.target.value as selectValue)
        }} defaultValue={selected}>
            <option value={'Morning'}>
                Time to Work
            </option>
            <option value={'Afternoon'}>
                Time to Eat
            </option>
            <option value={'Evening'}>
                Time to Gym
            </option>
            <option value={'Night'}>
                Time to Баиньки
            </option>
        </select>
    )
}