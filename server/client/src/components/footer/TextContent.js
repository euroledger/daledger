import React from 'react';
import { useStyles } from '../containerstyle';
// import ProfileContext from '../../ProfileContext';
// import { DeviceHelper } from '../../utils';
import { makeStyles } from "@material-ui/core/styles";

const TextContent = ({ title, text }) => {
    // const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const localStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },

        panel: {
            marginTop: '10rem', 
            maxHeight: '25rem', 
            overflowY: 'auto',
            [theme.breakpoints.down('sm')]: {
                maxHeight: '100rem', 
            },
        },
    }));
    const localClasses = localStyles();

    // format the text array with strings and html break elements 
    const getText = () => {
        let t = [];
        if (text === undefined) {
            return "";
        }
        for (const str of text) {
            t.push(str);
            t.push(<><br /><br /></>);
        }
        return t;
    }

    return (
        <div style={{}} className={`${classes.center} ${classes.standardborder} ${localClasses.panel}`}>

            <div style={{ fontSize: '1.9rem' }} >
                <span style={{ borderBottom: "3px solid", paddingBottom: '1.4rem' }}>
                    {title}
                </span>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '4rem', textAlign: 'justify' }}>
                {getText()}
            </p>
        </div>
    );
};

export default TextContent;



