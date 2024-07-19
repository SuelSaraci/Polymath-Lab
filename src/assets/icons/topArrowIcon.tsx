import React from 'react';

const TopArrowIcon = ({ fillColor }: { fillColor: string }) => (
    <svg
        height='512px'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 512 512'
        width='512px'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <polygon
            points='396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5'
            fill={fillColor}
        />
    </svg>
);

export default TopArrowIcon;
