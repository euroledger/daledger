import React, { useContext } from 'react';
import ProfileContext from '../../../../../ProfileContext';
import { BACKGROUND_BUTTON_COLOR } from '../../../../constants';

const InfoPanel = () => {
    const { translations } = useContext(ProfileContext);

    const label1 = `${translations.functionalareacolumns[1].title}: <20 sqm`;
    const label2 = `${translations.functionalareacolumns[2].title}: 21-50 sqm`;
    const label3 = `${translations.functionalareacolumns[3].title}: >50sqm`;

    return (
        <div
            style={{
                borderStyle: 'solid',
                borderColor: 'white',
                borderWidth: '2px',
                borderRadius: '18px',
                backgroundColor: BACKGROUND_BUTTON_COLOR,
                fontSize: '1rem',
                color: 'white',
                width: '12rem',
                height: '7rem'
            }}
        >
            <div
                style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    // paddingTop: '80px'
                }}
            >
                <p>{label1}</p>
                <p>{label2}</p>
                <p>{label3}</p>
            </div>
        </div>

    )
}

export default InfoPanel;
