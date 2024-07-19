import '@/styles/globals.css';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
export default function App({ Component, pageProps }) {
    return (
        <CookieConsentProvider>
            <Component {...pageProps} />
        </CookieConsentProvider>
    );
}
