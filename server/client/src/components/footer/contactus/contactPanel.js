import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import Icon from '@material-ui/core/Icon';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core';
import ProfileContext from '../../../ProfileContext';

const ContactPanel = ({ title }) => {
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
            width: '42rem', 
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
            <div style={{ fontSize: '1.2rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '4rem' }}>
                {translations.contactussubtitle}
            </div>
            <div className={localClasses.contactboxpanel}>
                <div className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Icon>phone</Icon>
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} >+40 730 200 505</div>
                    </div>
                </div>
                <div className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Icon>email</Icon>
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} >hello@justdoitdesign.com</div>
                    </div>
                </div>
                <div style={{ fontSize: '0.7rem'}} className={localClasses.box}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '1rem' }}>{translations.contactussocialmedia}</div>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row' }}>
                            {/* <LinkedInIcon style={{ marginLeft: '0.2rem', marginRight: '0.2rem' }} ></LinkedInIcon> */}
                            <InstagramIcon style={{ marginLeft: '0.2rem', marginRight: '0.2rem' }} ></InstagramIcon>
                            <FacebookIcon style={{ marginLeft: '0.2rem', marginRight: '0.2rem' }} ></FacebookIcon>
                        </div>
                        <div style={{ marginTop: '1rem' }}>{translations.contactuscomingsoon}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;



