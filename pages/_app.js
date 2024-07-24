import '@/styles/globals.css';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import { NextAuthProvider } from "@/contexts/AuthProvider";

export default function App({ Component, pageProps }) {
    return (
        <CookieConsentProvider>
            <NextAuthProvider>
                <Component {...pageProps} />
            </NextAuthProvider>
        </CookieConsentProvider>
    );
}
