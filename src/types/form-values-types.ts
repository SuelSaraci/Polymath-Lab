export interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    city: string;
    nationality: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    github: string;
    personalWebsite: string;
    otherReference: string;
    yearsOfExperience: string; // assuming a string for dropdown values
    textfield: string;
    frontEnd: boolean;
    backEnd: boolean;
    databases: boolean;
    algorithms: boolean;
    architectures: boolean;
    recaptcha: string | null; // for ReCaptcha, which can be a string or null
    [key: string]: any; // to accommodate any additional fields dynamically
}
