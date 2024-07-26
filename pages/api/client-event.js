import { newEvent } from '@/actions/newEvent';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { eventType, details } = req.body;

            newEvent(eventType, details)
            res.status(200).json({});
        } catch (error) {
            newEvent('apiError', {
                statusCode: 500,
                path: "/api/client-event",
                message: error.message
            })
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }

    }
}