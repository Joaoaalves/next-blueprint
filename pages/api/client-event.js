import axios from 'axios';

const APP_ID = process.env.ANALYTICS_APP_ID;
const API_URL = process.env.AWS_API_URL;
const ON_PROD = process.env.ON_PROD;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { eventType, details } = req.body;

        if (ON_PROD === 'false') {
            console.log('Ignoring new action, if you want to track events, set ON_PROD = true on .env.local');
            console.log(`Action ignored: ${eventType}`);
            return res.status(200).json({ message: 'Action ignored in development mode' });
        }

        let data = JSON.stringify({
            ApplicationId: APP_ID,
            EventType: eventType,
            Details: details
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_URL}/event`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            res.status(200).json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
