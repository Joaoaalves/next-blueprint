import { useState } from 'react';

export default function Button({ text, className, onClick, details }) {
    const handleClick = async () => {
        onClick();

        try {
            const response = await fetch('/api/clientAction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    eventType: 'click',
                    details: details
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Failed to send action:', error);
        }
    };

    return <button className={className} onClick={handleClick}>{text}</button>;
}