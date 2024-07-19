import { PhoneNumberInputProps } from '@/types/phone-number-types';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ label, value, onChange }) => {
    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <InputGroup>
                <InputGroup.Text>+383</InputGroup.Text>
                <Form.Control
                    type='number'
                    placeholder='Enter phone number'
                    value={value}
                    onChange={onChange}
                />
            </InputGroup>
        </Form.Group>
    );
};

export default PhoneNumberInput;
