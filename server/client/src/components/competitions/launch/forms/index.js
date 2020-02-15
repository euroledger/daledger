import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import { SwipeableDrawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import LaunchCompetitionForm from './LaunchCompetitionForm';
import ProfileContext from '../../../../ProfileContext';



const Launch = () => {
    const { translations } = useContext(ProfileContext);
    const [state, setState] = React.useState(false);

    const toggleDrawer = open => event => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };
    const classes = useStyles();
    const sideList = () => (
        <div
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ maxWidth: '300px' }}
        >
            <List>
                <p
                    style={{
                        marginLeft: '10px',
                        marginRight: '20px',
                        lineHeight: '20px',
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }}
                >
                    {translations.competitionDrawerText[0]}<br></br><br></br>
                    {translations.competitionDrawerText[1]}<br></br><br></br>
                    {translations.competitionDrawerText[2]}<br></br><br></br>
                    {translations.competitionDrawerText[3]}
                </p>
            </List>
        </div>
    );

    return (
        <div className={`${classes.container} ${classes.launch}`} data-test='contentComponent'>
            <div
                style={{
                    textAlign: 'right',
                    margin: '0px auto 0px auto',
                    display: 'inline-block',
                }}
                className={classes.panel}
            >
                {/* TODO Move Button and SwipeableDrawer into its own component */}

                <div className={classes.buttonspacing}>
                    <Button
                        className={classes.drawerButton}
                        color='inherit'
                        data-test='readmebutton'
                        onClick={toggleDrawer(true)}
                    >
                        {translations.sidebarTitle}
                    </Button>

                    <SwipeableDrawer
                        anchor='right'
                        open={state}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {sideList('right')}
                    </SwipeableDrawer>
                </div>

                <div className={classes.launchformpadding}>
                    <LaunchCompetitionForm></LaunchCompetitionForm>
                </div>
            </div>
        </div>
    );
};

export default Launch;
