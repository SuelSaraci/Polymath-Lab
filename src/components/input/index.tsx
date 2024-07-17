import { InputProps } from '@/types/input-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, required = false }) => {
    return (
        <Form.Group controlId={`form${label}`}>
            <Form.Label>
                {label}
                {required && ' *'}
            </Form.Label>
            <Form.Control
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
            {required && (
                <Form.Text className='text-muted'>
                    Your {label.toLowerCase()} is required *
                </Form.Text>
            )}
        </Form.Group>
    );
};

export default Input;
