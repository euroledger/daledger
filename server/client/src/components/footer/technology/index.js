import React, { useContext }  from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import TextContent from '../TextContent';


const Technology = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const text = translations.technologytext;
    const title = translations.technologytitle;

    return (
        <div
        className={classes.container}
        data-test='contentComponent'
        >
            <TextContent title={title} text={text}></TextContent>
        </div>
    );
};

export default Technology;
