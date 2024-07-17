export interface ReCaptchaProps {
    sitekey: string; // Google Recaptcha sitekey obtained from Google Recaptcha admin console
    onChange: (value: string | null) => void; // Callback to handle token change
    onExpired?: () => void; // Optional callback for expired captcha
    onError?: () => void; // Optional callback for captcha load error
    size?: 'normal' | 'compact' | 'invisible'; // Optional size of the captcha widget
    theme?: 'light' | 'dark'; // Optional theme of the captcha widget
}
