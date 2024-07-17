import Checkbox from '@/components/checkbox';
import Dropdown from '@/components/dropdown';
import Input from '@/components/input';
import PhoneNumberInput from '@/components/phone-number';
import Textarea from '@/components/textarea';
import { FormItem } from '@/types/form-item-types';

// Define all form items in an array
export const formItems: FormItem[] = [
    { type: 'input', label: 'First Name', placeholder: 'First Name', component: Input },
    { type: 'input', label: 'Last Name', placeholder: 'Last Name', component: Input },
    { type: 'phone', label: 'Phone Number', component: PhoneNumberInput },
    { type: 'input', label: 'Country', placeholder: 'Country', component: Input },
    { type: 'input', label: 'City', placeholder: 'City', component: Input },
    { type: 'input', label: 'Nationality', placeholder: 'Nationality', component: Input },
    { type: 'input', label: 'Linkedin', placeholder: 'Linkedin', component: Input },
    { type: 'input', label: 'Facebook', placeholder: 'Facebook', component: Input },
    { type: 'input', label: 'Twitter', placeholder: 'Twitter', component: Input },
    { type: 'input', label: 'Github', placeholder: 'Github', component: Input },
    {
        type: 'input',
        label: 'Personal Website or blog',
        placeholder: 'Personal Website or blog',
        component: Input,
    },
    {
        type: 'input',
        label: 'Any other reference',
        placeholder: 'Any other reference',
        component: Input,
    },
    { type: 'checkbox', label: 'Front End', checked: false, component: Checkbox },
    { type: 'checkbox', label: 'Back End', checked: false, component: Checkbox },
    { type: 'checkbox', label: 'Databases', checked: false, component: Checkbox },
    { type: 'checkbox', label: 'Algorithms', checked: false, component: Checkbox },
    { type: 'checkbox', label: 'Architectures', checked: false, component: Checkbox },
    {
        type: 'dropdown',
        label: 'Years of experience',
        options: [],
        value: '',
        component: Dropdown,
    },
    { type: 'textarea', label: 'Textfield', placeholder: 'Textfield', component: Textarea },
];
