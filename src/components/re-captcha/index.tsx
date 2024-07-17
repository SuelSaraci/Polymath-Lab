import { ReCaptchaProps } from '@/types/re-captcha-types';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaComponent: React.FC<ReCaptchaProps> = ({
    sitekey,
    onChange,
    onExpired,
    onError,
    size = 'normal',
    theme = 'light',
}) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    useEffect(() => {
        // Reset captcha value when component unmounts
        return () => {
            setCaptchaValue(null);
        };
    }, []);

    const handleCaptchaChange = useCallback(
        (value: string | null) => {
            setCaptchaValue(value);
            onChange(value);
        },
        [onChange],
    );

    const handleCaptchaExpired = useCallback(() => {
        setCaptchaValue(null);
        if (onExpired) {
            onExpired();
        }
    }, [onExpired]);

    const handleCaptchaError = useCallback(() => {
        if (onError) {
            onError();
        }
    }, [onError]);

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={sitekey}
            onChange={handleCaptchaChange}
            onExpired={handleCaptchaExpired}
            onError={handleCaptchaError}
            size={size}
            theme={theme}
        />
    );
};

export default ReCaptchaComponent;
