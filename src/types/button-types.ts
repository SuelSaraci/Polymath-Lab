export interface ReusableButtonProps {
    text: string;
    onClick?: () => void;
    icon?: any;
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger'
        | 'info'
        | 'light'
        | 'dark';
    size?: 'sm' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}
