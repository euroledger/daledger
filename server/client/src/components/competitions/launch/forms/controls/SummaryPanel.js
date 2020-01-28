import React, { useContext } from 'react';
import ProfileContext from '../../../../../ProfileContext';
import { useStyles } from '../../../../containerstyle';

const SummaryPanel = ({ objective, indoors }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const indooroutdoorLabel = indoors ? translations.functionalAreaPanelLabel3indoors : translations.functionalAreaPanelLabel3outdoors;
    return (
        <div
            className={classes.summaryPanel}
        >
            <div
                className={classes.summaryPanelPadding}
            >
                <p>{translations.functionalAreaPanelLabel1}</p>
                <p>{objective}</p>
                <p>{indooroutdoorLabel}</p>
            </div>
        </div>

    )
}

export default SummaryPanel;
