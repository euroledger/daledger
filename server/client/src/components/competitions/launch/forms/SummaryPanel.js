import React, { useContext } from 'react';
import ProfileContext from '../../../../ProfileContext';
import { useStyles } from '../../../containerstyle';

const SummaryPanel = ({ name, objective, indoors }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const indooroutdoorLabel = indoors ? translations.functionalAreaPanelLabel3indoors : translations.functionalAreaPanelLabel3outdoors;

    const getName = () => {
        if (name) {
            return <p data-test="project-summary-name" style={{overflowWrap: 'break-word'}}>{name}</p>;
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
                <p data-test="project-summary-area">{translations.functionalAreaPanelLabel1}</p>
                <p data-test="project-summary-objective">{objective}</p>
                <p data-test="project-summary-indoor">{indooroutdoorLabel}</p>
            </div>
        </div>

    )
}

export default SummaryPanel;
