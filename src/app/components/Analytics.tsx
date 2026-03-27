"use client";

import Script from 'next/script';
import { useState, useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-HEZS0Z3M2Z';

export default function Analytics() {
    const [consented, setConsented] = useState<boolean | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem('analytics-consent');
        if (stored !== null) setConsented(stored === 'true');
    }, []);

    const accept = () => {
        localStorage.setItem('analytics-consent', 'true');
        setConsented(true);
    };

    const decline = () => {
        localStorage.setItem('analytics-consent', 'false');
        setConsented(false);
    };

    if (consented === null) {
        return (
            <div style={{
                position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
                background: 'rgba(15,23,42,0.97)', color: '#ededed',
                padding: '1rem 1.5rem', display: 'flex', gap: '1rem',
                alignItems: 'center', justifyContent: 'space-between',
                borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem',
                flexWrap: 'wrap',
            }}>
                <p style={{ margin: 0, maxWidth: '600px' }}>
                    We use analytics cookies to improve your experience. See our{' '}
                    <a href="#" style={{ color: '#14b8a6', textDecoration: 'underline' }}>privacy policy</a>.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                    <button
                        onClick={accept}
                        style={{ background: '#14b8a6', color: '#000', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 700 }}
                    >
                        Accept
                    </button>
                    <button
                        onClick={decline}
                        style={{ background: 'transparent', color: '#9ca3af', border: '1px solid #374151', padding: '0.5rem 1.25rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Decline
                    </button>
                </div>
            </div>
        );
    }

    if (!consented) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}
