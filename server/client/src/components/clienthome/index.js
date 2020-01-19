import React, { useContext } from 'react';
import { useStyles } from '../containerstyle';
import { withStyles } from '@material-ui/core/styles';
import ProfileContext from '../../ProfileContext';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import { DeviceHelper } from '../../utils';

const MyTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 820,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9'
    }
}))(Tooltip);
const ClientHome = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const isLaptop = () => {
        return DeviceHelper();
    };

    return (
        <div
            className={classes.container}
            style={{ backgroundImage: 'url("road.png")', height: '91vh' }}
            data-test='contentComponent'
        >
            <div>
                <div className={classes.panel1}>
                    <MyTooltip enterDelay={500} leaveDelay={200} title={translations.tooltip1text}>
                        <Button
                            color='inherit'
                            className={classes.button}
                            href='/launch'
                            endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                        >
                            {translations.button1text}
                        </Button>
                    </MyTooltip>
                    <MyTooltip title={translations.tooltip2text}>
                        <Button
                            color='inherit'
                            className={classes.button}
                            href='/draft'
                            endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                        >
                            {translations.button2text}
                        </Button>
                    </MyTooltip>
                </div>
                <div>
                    <div className={classes.panel2}>
                        <MyTooltip title={translations.tooltip3text}>
                            <Button
                                color='inherit'
                                className={classes.button}
                                href='/ongoing'
                                endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            >
                                {translations.button3text}
                            </Button>
                        </MyTooltip>
                        <MyTooltip title={translations.tooltip4text}>
                            <Button
                                color='inherit'
                                className={classes.button}
                                href='/past'
                                endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            >
                                {translations.button4text}
                            </Button>
                        </MyTooltip>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ClientHome;
