import React, { useContext } from 'react';
import ProfileContext from '../../../../../ProfileContext';
import { useStyles } from '../../../../containerstyle';

const SummaryPanel = ({objective}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    return (
        <div
            className={classes.summaryPanel}
        >
            <div
               className={classes.summaryPanelPadding}
            >
                <p>{translations.functionalAreaPanelLabel1}</p>
                <p>{objective}</p>
                <p>{translations.functionalAreaPanelLabel3}</p>
            </div>
        </div>

    )
}

export default SummaryPanel;
