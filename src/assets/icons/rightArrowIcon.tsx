import React from 'react';

const ArrowRightIcon = ({ fillColor }: { fillColor: string }) => (
    <svg
        width='800px'
        height='800px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M10 7L15 12L10 17'
            stroke={fillColor}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);

export default ArrowRightIcon;
