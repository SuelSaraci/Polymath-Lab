import Checkbox from '@/components/checkbox';
import Dropdown from '@/components/dropdown';
import Input from '@/components/input';
import PhoneNumberInput from '@/components/phone-number';
import Textarea from '@/components/textarea';
import ReCaptchaComponent from '@/components/re-captcha';
import { FormItem } from '@/types/form-item-types';
import enumsToOptions from '@/utils/enumsToOptions';
import { RelevantExperience } from '@/enums';

// Relevant experience options
const relevantExperienceOptions = enumsToOptions(RelevantExperience);

// Define all form items in an array
export const formItems: FormItem[] = [
    {
        type: 'input',
        label: 'First Name',
        placeholder: 'First Name',
        component: Input,
        name: 'firstName',
    },
    {
        type: 'input',
        label: 'Last Name',
        placeholder: 'Last Name',
        component: Input,
        name: 'lastName',
    },
    {
        type: 'phone',
        label: 'Phone Number',
        component: PhoneNumberInput,
        name: 'phoneNumber',
    },
    {
        type: 'input',
        label: 'Country',
        placeholder: 'Country',
        component: Input,
        name: 'country',
    },
    {
        type: 'input',
        label: 'City',
        placeholder: 'City',
        component: Input,
        name: 'city',
    },
    {
        type: 'input',
        label: 'Nationality',
        placeholder: 'Nationality',
        component: Input,
        name: 'nationality',
    },
    {
        type: 'input',
        label: 'Linkedin',
        placeholder: 'Linkedin',
        component: Input,
        name: 'linkedin',
    },
    {
        type: 'input',
        label: 'Facebook',
        placeholder: 'Facebook',
        component: Input,
        name: 'facebook',
    },
    {
        type: 'input',
        label: 'Twitter',
        placeholder: 'Twitter',
        component: Input,
        name: 'twitter',
    },
    {
        type: 'input',
        label: 'Github',
        placeholder: 'Github',
        component: Input,
        name: 'github',
    },
    {
        type: 'input',
        label: 'Personal Website or blog',
        placeholder: 'Personal Website or blog',
        component: Input,
        name: 'personalWebsite',
    },
    {
        type: 'input',
        label: 'Any other reference',
        placeholder: 'Any other reference',
        component: Input,
        name: 'otherReference',
    },
    {
        type: 'dropdown',
        label: 'Years of experience',
        options: relevantExperienceOptions,
        component: Dropdown,
        name: 'yearsOfExperience',
    },
    {
        type: 'textarea',
        label: 'Textfield',
        placeholder: 'Textfield',
        component: Textarea,
        name: 'textfield',
    },
    {
        type: 'checkbox',
        label: 'Front End',
        checked: false,
        component: Checkbox,
        name: 'frontEnd',
    },
    {
        type: 'checkbox',
        label: 'Back End',
        checked: false,
        component: Checkbox,
        name: 'backEnd',
    },
    {
        type: 'checkbox',
        label: 'Databases',
        checked: false,
        component: Checkbox,
        name: 'databases',
    },
    {
        type: 'checkbox',
        label: 'Algorithms',
        checked: false,
        component: Checkbox,
        name: 'algorithms',
    },
    {
        type: 'checkbox',
        label: 'Architectures',
        checked: false,
        component: Checkbox,
        name: 'architectures',
    },
    {
        type: 'recaptcha',
        sitekey: 'test',
        label: '',
        component: ReCaptchaComponent,
        name: 'recaptcha',
    },
];

// Formik Initial Values
export const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    city: '',
    nationality: '',
    linkedin: '',
    facebook: '',
    twitter: '',
    github: '',
    personalWebsite: '',
    otherReference: '',
    yearsOfExperience: '', // default value for dropdowns
    textfield: '',
    frontEnd: false,
    backEnd: false,
    databases: false,
    algorithms: false,
    architectures: false,
    recaptcha: null, // default value for ReCaptcha
};

//
