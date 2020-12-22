import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import TextContent from '../TextContent';

const AboutUs = () => {
    const { translations } = useContext(ProfileContext);
    const text = translations.aboutustext;
    const title = translations.aboutustitle;

    const classes = useStyles();

    return (
        <div
            className={classes.container}
            data-test='contentComponent'>
            <TextContent title={title} text={text}></TextContent>
        </div>
    );
};

export default AboutUs;
