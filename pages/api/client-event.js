import { newEvent } from '@/actions/newEvent';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { eventType, details } = req.body;

            newEvent(eventType, details)
            res.status(200).json({});
        } catch (error) {
            newEvent('error', {
                message: error.message,
                route: "/api/client-event"
            })
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }

    }
}
