import { DropdownProps } from '@/types/dropdown-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
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
            <Form.Control as='select' value={value} onChange={onChange} required={required}>
                <option value=''>Select...</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Control>
            {required && (
                <Form.Text className='text-muted'>
                    Your {label.toLowerCase()} is required *
                </Form.Text>
            )}
        </Form.Group>
    );
};

export default Dropdown;
