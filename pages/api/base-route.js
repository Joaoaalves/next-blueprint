import { newEvent } from '@/actions/newEvent';

const eventType = "apiRequest"

export default async function handler(req, res) {
    try {
        /*
        The code goes here
        */


        newEvent(eventType, {
            route: req.url
        })

        return res.status(200).json({ message: "Request received successfully!" })
    } catch (error) {

        await newEvent('apiError', {
            statusCode: 500,
            path: "/api/client-event",
            message: error.message
        })

        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}