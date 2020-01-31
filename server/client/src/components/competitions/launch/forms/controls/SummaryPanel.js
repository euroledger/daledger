import React, { useContext } from 'react';
import ProfileContext from '../../../../../ProfileContext';
import { useStyles } from '../../../../containerstyle';

const SummaryPanel = ({ name, objective, indoors }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const indooroutdoorLabel = indoors ? translations.functionalAreaPanelLabel3indoors : translations.functionalAreaPanelLabel3outdoors;

    const getName = () => {
        if (name) {
            return <p style={{overflowWrap: 'break-word'}}>{name}</p>;
        }
        return <></>;
    }
    return (
        <div
            className={classes.summaryPanel}
        >
            <div
                className={classes.summaryPanelPadding}
            >
                {getName()}
                <p>{translations.functionalAreaPanelLabel1}</p>
                <p>{objective}</p>
                <p>{indooroutdoorLabel}</p>
            </div>
        </div>

    )
}

export default SummaryPanel;
