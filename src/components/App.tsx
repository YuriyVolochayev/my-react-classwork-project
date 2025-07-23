
// // 1. Імпортуємо функцію useState
import { useState } from "react";
import ClickCounter from "./ClickCounter";
import Toggle from "./Toggle";

export default function App() {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <>
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <Toggle/>
            
        </>
    )
}