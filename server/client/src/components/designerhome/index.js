import React, { useContext } from 'react';
import { useStyles } from '../containerstyle';
import ProfileContext from '../../ProfileContext';
import Tooltip from '../controls/MyTooltip';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import { DeviceHelper } from '../../utils';


const DesignerHome = () => {
    const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    const isLaptop = () => {
        return DeviceHelper();
    };

    return (
        <div
            className={`${classes.container} ${classes.containerdesigner} `}
            data-test='contentComponent'
        >
            <div>
                <div className={classes.panel1} >
                    <Tooltip enterDelay={500} leaveDelay={200} title={translations.designertooltip1text}>
                        <Button
                            color='inherit'
                            className={classes.button}
                            href='/launch'
                            endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            data-test="launchButton"
                        >
                            {translations.designerbutton1text}
                        </Button>
                    </Tooltip>
                    <Tooltip title={translations.designertooltip2text}>
                        <Button
                            color='inherit'
                            className={classes.button}
                            href='/draft'
                            endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            data-test="draftButton"
                        >
                            {translations.designerbutton2text}
                        </Button>
                    </Tooltip>
                </div>
                <div>
                    <div className={classes.panel2}>
                        <Tooltip title={translations.designertooltip3text}>
                            <Button
                                color='inherit'
                                className={classes.button}
                                href='/ongoing'
                                data-test="ongoingButton"
                                endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            >
                                {translations.designerbutton3text}
                            </Button>
                        </Tooltip>
                        <Tooltip title={translations.designertooltip4text}>
                            <Button
                                color='inherit'
                                className={classes.button}
                                data-test="inheritButton"
                                href='/past'
                                endIcon={!isLaptop() ? <HelpIcon /> : <p />}
                            >
                                {translations.designerbutton4text}
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignerHome;
