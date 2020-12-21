import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import Icon from '@material-ui/core/Icon';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core';
import ProfileContext from '../../../ProfileContext';

const ContentPanel = ({ title }) => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    let FieldCss = withStyles({
        // @global is handled by jss-plugin-global.
        '@global': {
            '.MuiIcon-root': {
                fontSize: '2.5rem'
            },
        }
    })(() => null);

    const localStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },

        panel: {
            marginTop: '10rem',
            maxHeight: '25rem',
            width: '65rem',
            height: '21rem',
            overflowY: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '72vw',
                maxHeight: '40rem',
                height: '100rem',
            },
        },
        contactboxpanel: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '5rem',
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        box: {
            flex: '1 1 0px',
            padding: '1rem',
            marginLeft: '1rem',
            marginRight: '1rem',
            border: '1px solid white',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '1rem'
            },
        }
    }));
    const localClasses = localStyles();

    return (
        <div className={`${classes.center} ${classes.standardborder} ${localClasses.panel}`}>
            <FieldCss></FieldCss>
            <div style={{ fontSize: '1.9rem' }} >
                <span style={{ borderBottom: "3px solid", paddingBottom: '1.4rem' }}>
                    {title}
                </span>
            </div>
            <div className={localClasses.contactboxpanel}>
                <div className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            {translations.howitworksdescribetitle}
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} >
                            <p>
                                {translations.howitworksdescribebody}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            {translations.howitworkslaunchtitle}
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} >
                            <p>
                                {translations.howitworkslaunchbody}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            {translations.howitworkspicktitle}
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} >
                            <p>
                                {translations.howitworkspickbody}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContentPanel;



