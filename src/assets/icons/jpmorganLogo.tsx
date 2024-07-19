import React from 'react';

const JPMorganLogo = ({ fillProp = '#002C77' }: { fillProp: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='100' height='100'>
            <path
                fill={fillProp}
                d='M192 64v384h128V64H192zm128 432h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm128 384h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32zm0-64h-64v-32h64v32z'
            />
        </svg>
    );
};

export default JPMorganLogo;
