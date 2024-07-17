import { PhoneNumberInputProps } from '@/types/phone-number-types';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ label, value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Basic phone number validation could be added here if needed
        onChange(event.target.value);
    };

    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <InputGroup>
                <InputGroup.Text>+1</InputGroup.Text>
                <Form.Control
                    type='tel'
                    placeholder='Enter phone number'
                    value={value}
                    onChange={handleChange}
                />
            </InputGroup>
        </Form.Group>
    );
};

export default PhoneNumberInput;
