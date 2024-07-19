/**
 * Converts an enum to an array of DropdownOption objects.
 * @param enumType - The enum to convert.
 * @returns An array of DropdownOption objects.
 */
const enumsToOptions = (enumType: any) => {
    return Object.entries(enumType).map(([key, value]) => ({
        value: key,
        label: value,
    }));
};

export default enumsToOptions;
