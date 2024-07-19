import { createContext, useContext, useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = getCookie('cookieConsent');

        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookie = (value) => {
        if (!['all', 'necessary'].includes(value))
            throw new Error(
                'Cookie consent value must be "all" or "necessary"'
            );

        setCookie('cookieConsent', value, { maxAge: 60 * 60 * 24 * 365 });

        setShowConsent(false);
    };

    return (
        <CookieConsentContext.Provider
            value={{ showConsent, setShowConsent, acceptCookie }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
};

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error(
            'useCookieConsent must be used within a CookieConsentProvider'
        );
    }
    return context;
};
