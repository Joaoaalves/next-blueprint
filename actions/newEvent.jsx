import axios from 'axios';

const APP_ID = process.env.ANALYTICS_APP_ID;
const API_URL = process.env.AWS_API_URL;
const ON_PROD = process.env.ON_PROD

export async function newEvent(eventType, details) {
    if(ON_PROD === 'false'){
        console.log('Ignoring new action, if you want to track events, set ON_PROD = true on .env.local')
        console.log(`Action ignored: ${eventType}`)
        return
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

    axios
        .request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
