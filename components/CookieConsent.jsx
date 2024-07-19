import { useCookieConsent } from '@/contexts/CookieConsentContext';

const CookieConsent = () => {
    const { showConsent, acceptCookie } = useCookieConsent();

    if (!showConsent) return null;

    return (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
                <span className="text-dark text-base mr-16">
                    This website uses cookies to improve user experience. By
                    using our website you consent to all cookies in accordance
                    with our Cookie Policy.
                </span>
                <div className="flex flex-col gap-y-2">
                    <button
                        className="bg-green-500 py-2 px-8 rounded text-white cursor-pointer transition-all duration-150 hover:bg-green-700"
                        onClick={() => acceptCookie('all')}
                    >
                        Accept
                    </button>
                    <button
                        className="bg-neutral-400 py-2 px-8 rounded text-white cursor-pointer transition-all duration-150 hover:bg-neutral-700"
                        onClick={() => acceptCookie('necessary')}
                    >
                        Only Necessary
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
