"use server"

import axios from "axios"

export default function Button({ className, onClick, details, children }) {
    const handleClick = async () => {
        if(onClick)
            onClick();
            
        axios.post('/api/client-event', {
            eventType: "click",
            details
        })
    };

    return <button className={`${className} w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-150 hover:shadow-[0px_0px_32px_0px_rgba(96,60,255,0.25)]`}
    onClick={handleClick}>{children}</button>;
}