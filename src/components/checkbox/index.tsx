import { CheckboxProps } from '@/types/checkbox-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <Form.Group controlId={`form${label}`}>
            <Form.Check type='checkbox' label={label} checked={checked} onChange={onChange} />
        </Form.Group>
    );
};

export default Checkbox;
