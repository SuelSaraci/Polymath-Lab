import { ReusableButtonProps } from '@/types/button-types';
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

// Reusable button component
const ReusableButton: React.FC<ReusableButtonProps> = ({
    text,
    onClick,
    icon: Icon,
    variant = 'primary',
    size,
    disabled = false,
    loading = false,
}) => {
    return (
        <Button variant={variant} size={size} onClick={onClick} disabled={disabled || loading}>
            {loading ? (
                <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
            ) : (
                <>
                    {text}
                    {/* Conditionally render the icon if provided */}
                    {Icon && <Icon className='mr-2' />}{' '}
                </>
            )}
        </Button>
    );
};

export default ReusableButton;
