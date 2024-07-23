import { Inter } from 'next/font/google';
const font = Inter({ subsets: ['latin'] });
import { newEvent } from '@/actions/newEvent';
import UAParser from 'ua-parser-js';

import CookieConsent from '@/components/CookieConsent';
import Button from '@/components/Button';

export async function getServerSideProps({ req }) {
    const forwarded = req.headers['x-forwarded-for'];

    let ipAddress = forwarded
        ? forwarded.split(/, /)[0]
        : req.connection.remoteAddress;

    ipAddress = ipAddress.startsWith('::ffff:') ? ipAddress.split('::ffff:')[1] : ipAddress;

    const parser = new UAParser(req.headers['user-agent']);
    const device = parser.getResult().device.type || 'desktop';

    await newEvent('pageView', {
        page: '/',
        ip: ipAddress,
        device
    });

    return {
        props: {}
    };
}

export default function Home() {
    return (
        <main className={`${font.className}`}>
            <CookieConsent />
            <Button
                text="Placeholder Button"
                onClick={() => console.log('Clickou')}
                details={{ button: 'placeholder' }}
            />
        </main>
    );
}
