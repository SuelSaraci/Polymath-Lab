export interface FormItem {
    name: string;
    type: 'input' | 'phone' | 'checkbox' | 'dropdown' | 'textarea' | 'recaptcha';
    sitekey?: string;
    label: string;
    placeholder?: string;
    component: React.ComponentType<any>;
    checked?: boolean;
    options?: any[]; // Define the type of options array if known
    value?: string; // Define the type of value if known
}
