import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    max-height: 0;
`;

export default function Spinner({ active }) {
    return (
        <ScaleLoader
            css={override}
            sizeUnit={'px'}
            size={100}
            color={'#1276BE'}
            loading={active}
        />
    );
}
