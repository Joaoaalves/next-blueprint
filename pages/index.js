import { Inter } from 'next/font/google';
import CookieConsent from '@/components/CookieConsent';
const font = Inter({ subsets: ['latin'] });
import { newAction } from '@/actions/newAction';
export async function getServerSideProps() {
    newAction('pageView', {
        page: '/'
    });

    return {
        props: {}
    };
}

export default function Home() {
    return (
        <main className={`${font.className}`}>
            <CookieConsent />
        </main>
    );
}
