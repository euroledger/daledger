import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import TextContent from '../TextContent';


const Terms = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const text = translations.termstext;
    const title = translations.termstitle;

    return (
        <div
            className={classes.container}
            data-test='contentComponent'
        >
            <TextContent title={title} text={text}></TextContent>
        </div>
    );
};

export default Terms;
