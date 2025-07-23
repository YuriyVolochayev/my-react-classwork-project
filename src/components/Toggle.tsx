import { useState } from "react";

export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={}></button>
        </div>
    )
}
