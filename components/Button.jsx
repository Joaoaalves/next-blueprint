"use server"

import { newEvent } from "@/actions/newEvent";
import axios from "axios"

export default function Button({ className, onClick, details, children }) {
    const handleClick = async () => {
        onClick();

        axios.post('/api/client-event', {
            eventType: "click",
            details
        })
    };

    return <button className={className} onClick={handleClick}>{children}</button>;
}