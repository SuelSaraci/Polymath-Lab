import { TextareaProps } from '@/types/textarea-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import './styles.css';

const Textarea: React.FC<TextareaProps> = ({
    label,
    placeholder,
    value,
    onChange,
    required = false,
}) => {
    return (
        <Form.Group controlId={`form${label}`}>
            <Form.Label>
                {label}
                {required && ' *'}
            </Form.Label>
            <Form.Control
                as='textarea'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className='custom-textarea'
            />
            {required && (
                <Form.Text className='text-muted'>
                    Your {label.toLowerCase()} is required *
                </Form.Text>
            )}
        </Form.Group>
    );
};

export default Textarea;
