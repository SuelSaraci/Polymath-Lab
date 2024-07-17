export interface DropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    required?: boolean;
}
