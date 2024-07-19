import React from 'react';

const SearchIcon = ({ fillColor = 'none' }: { fillColor: string }) => (
    <svg
        width='800px'
        height='800px'
        viewBox='0 0 24 24'
        fill={fillColor}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M15 15L21 21'
            stroke='#323232'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
            stroke='#323232'
            strokeWidth='2'
        />
    </svg>
);

export default SearchIcon;
