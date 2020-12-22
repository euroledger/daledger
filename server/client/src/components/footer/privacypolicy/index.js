import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import TextContent from '../TextContent';


const Privacy = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const text = translations.privacytext;
    const title = translations.privacytitle;

    return (
        <div
            className={classes.container}
            data-test='contentComponent'
        >
            <TextContent title={title} text={text}></TextContent>
        </div>
    );
}

export default Privacy;
