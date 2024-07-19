import React from 'react';

const ReleaseIcon = ({ fillColor = '#4285f4' }: { fillColor: string }) => (
    <svg width='800px' height='800px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='m9.47368421 4.15789474v2.10526315h-7.36842105v12.86315791h12.63157894v-7.6h2.1052632v7.368421c0 1.1578948-.9473685 2.1052632-2.1052632 2.1052632h-12.63157894c-1.15789474 0-2.10526316-.9473684-2.10526316-2.1052632v-12.63157891c0-1.15789473.94736842-2.10526315 2.10526316-2.10526315zm0 10.52631576v2.1052632h-5.26315789v-2.1052632zm3.15789469-3.1578947v2.1052631h-8.42105258v-2.1052631zm0-3.15789475v2.10526315h-8.42105258v-2.10526315zm3.1578948-5.26315789.9868421 2.17105263 2.1710526.9868421-2.1710526.98684211-.9868421 2.17105263-.9868421-2.17105263-2.1710527-.98684211 2.1710527-.9868421zm-3.1578948-2.10526316.6578948 1.44736842 1.4473684.65789474-1.4473684.65789473-.6578948 1.44736843-.6578947-1.44736843-1.4473684-.65789473 1.4473684-.65789474z'
            fill={fillColor}
            transform='translate(3 1)'
        />
    </svg>
);

export default ReleaseIcon;
