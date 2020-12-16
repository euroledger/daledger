import React, {useContext }  from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import TextContent from '../TextContent';


const Technology = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const text = translations.technologytext;

    return (
        <div
        className={classes.container}
        data-test='contentComponent'
        >
            <TextContent title="Technology" text={text}></TextContent>
        </div>
    );
};

export default Technology;
