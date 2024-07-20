import { Inter } from 'next/font/google';
const font = Inter({ subsets: ['latin'] });
import { newAction } from '@/actions/newAction';

import CookieConsent from '@/components/CookieConsent';
import Button from '@/components/Button';

export async function getServerSideProps({ req }) {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded
        ? forwarded.split(/, /)[0]
        : req.connection.remoteAddress;

    newAction('pageView', {
        page: '/',
        ip: ip
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
