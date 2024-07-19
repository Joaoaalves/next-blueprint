import axios from 'axios';

const APP_ID = process.env.ANALYTICS_APP_ID;
const API_URL = process.env.AWS_API_URL;

export async function newAction(eventType, details) {
    'use server';

    let data = JSON.stringify({
        ApplicationId: APP_ID,
        EventType: eventType,
        Details: details
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/action`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios
        .request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
