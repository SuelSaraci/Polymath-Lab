import React from 'react';

const BestBuyLogo = ({ fillProp = '#FFD800' }: { fillProp: string }) => {
    return (
        <svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
            <rect x='5' y='5' width='90' height='90' fill='lightgrey' />
            <text x='50' y='55' fontFamily='Arial' fontSize='24' textAnchor='middle' fill='black'>
                Logo
            </text>
        </svg>
    );
};

export default BestBuyLogo;
