import { Inter } from 'next/font/google';
const font = Inter({ subsets: ['latin'] });

import { newEvent } from '@/actions/newEvent';
import { getClientIp, getClientDevice } from '@/lib/getClientData';

import Button from '@/components/Button';

export async function getServerSideProps({ req, res }) {

    newEvent('pageView', {
        page: '/',
        ip: getClientIp(req),
        device: getClientDevice(req)
    });

    return {
        props: {}
    };
}

export default function Home() {
    return (
        <main className={`${font.className}`}>
            <Button onClick={() => console.log('Clickou')} details={{
                route: "/",
                component: "default-button",
                message: 'test'
            }} className={"bg-purple-600 text-white p-4 rounded"}>Register new Event</Button>
        </main>
    );
}
