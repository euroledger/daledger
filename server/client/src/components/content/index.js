import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../containerstyle';
import ProfileContext from '../../ProfileContext';

const Content = () => {
    const classes = useStyles();
    const { translations, auth } = useContext(ProfileContext);


    return (
        <div className={classes.container} style={{height: '91vh'}} data-test='contentComponent'>
            <div className={classes.panel}>
                <Button
                    color='inherit'
                    className={classes.button}
                    data-test='projectButton'
                    href={auth ? '/clienthome' : '/clientregister'}
                >
                    {translations.projectButtonText}

                    {/* If we need multiple lines of text on the button do this:- */}
                    {/* <div style={{ lineHeight: 0.5 }}>
                        <p style={{ fontSize: '1.3rem' }}>I have a project</p>
                        <p style={{ fontSize: '0.8rem' }}>Manage Compeitions</p>
                    </div> */}

                </Button>
                <Button
                    color='inherit'
                    data-test='designerButton'
                    className={classes.button}
                    href={auth ? '/designerhome' : '/designerregister'}
                >
                    {translations.designerButtonText}
                </Button>
            </div>
        </div>
    );
};

export default Content;
