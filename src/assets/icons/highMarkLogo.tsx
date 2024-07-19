import React from 'react';

const HighmarkLogo = ({ fillProp = '#0033A0' }: { fillProp: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' width='100' height='100'>
            <path fill={fillProp} d='M0 0h1024v1024H0z' />
            <path
                fill={fillProp}
                d='M299.5 510.7c-4.7 0-9.4 1.8-13 5.2l-156.5 156.5c-3.5 3.5-5.2 8.2-5.2 13 0 4.8 1.8 9.5 5.2 13l156.5 156.5c3.5 3.5 8.2 5.2 13 5.2s9.5-1.8 13-5.2l156.5-156.5c3.5-3.5 5.2-8.2 5.2-13 0-4.7-1.8-9.4-5.2-13l-156.5-156.5c-3.5-3.5-8.2-5.2-13-5.2zM1024 1024H0V0h1024v1024z'
            />
        </svg>
    );
};

export default HighmarkLogo;
