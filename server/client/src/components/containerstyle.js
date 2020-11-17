import { makeStyles } from '@material-ui/core/styles';
import { BACKGROUND_BUTTON_COLOR, BACKGROUND_BUTTON_HOVER_COLOR, BACKGROUND_DARK_BUTTON_COLOR, BACKGROUND_INFO_PANEL_COLOR, FOREGROUND_PANEL_COLOR, FORM_PANEL_BORDER_WIDTH, BACKGROUND_PANEL_COLOR } from './constants';
export const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 350,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        marginLeft: '50px',
    },
    deletebutton: {
        marginLeft: '-4rem'
    },
    container: {
        height: '91vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 'calc(1rem + 2vmin)',
        color: 'white',
        background:
            'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(launch.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('sm')]: {
            height: '102rem',
        },
        [theme.breakpoints.only('md')]: {
            height: '120vh',
        }
    },
    launch: {
        background:
            'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(launch2.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    containerdraft: {
        height: '41.1rem',
        [theme.breakpoints.down('sm')]: {
            height: '60rem',
        }
    },
    containerclient: {
        backgroundImage: 'url("garden3.jpg")',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url("garden4.jpg")',
            height: '40rem',
        },
    },
    containerdesigner: {
        backgroundImage: 'url("beard.jpg")',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url("beard2.jpg")',
            height: '40rem',
        },
    },
    button: {
        textTransform: 'none',
        marginLeft: '1rem',
        marginRight: '1rem',
        fontSize: '1.4rem',
        background: 'transparent',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '22rem',
        height: '4.5rem',
        '&:hover': {
            backgroundColor: BACKGROUND_BUTTON_HOVER_COLOR,
            opacity: 0.4
        },
        marginTop: 0,
        [theme.breakpoints.down('sm')]: {
            width: '19rem',
            marginTop: '2rem',
            fontSize: '1.2rem'
        }
    },
    drawerButton: {
        transition: '0.3s',
        width: '130px',
        textDecoration: 'none',
        fontSize: '15px',
        color: 'white',
        borderRadius: '7px 7px 0 0',
        transform: 'rotate(270deg) translateY(44px)',

        zIndex: '1200',
        background: BACKGROUND_DARK_BUTTON_COLOR,
        '&:hover': {
            backgroundColor: BACKGROUND_BUTTON_HOVER_COLOR
            // opacity: 0.4
        },
    },
    formButton: {
        marginTop: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',

        background: BACKGROUND_BUTTON_COLOR,
        color: 'white',
        width: '8em',
        height: '2.8em',
        fontSize: '1.0rem',
        '&:hover': {
            backgroundColor: '#256381',
            opacity: 0.7
        },
        [theme.breakpoints.down('sm')]: {
            height: '2.8em',
            fontSize: '0.7rem',
        }
    },
    formpanel: {
        marginTop: '10rem',
        height: '60vh',
        width: '50vw',
        borderStyle: 'solid',
        borderWidth: FORM_PANEL_BORDER_WIDTH,
        borderRadius: '18px',
        backgroundColor: BACKGROUND_PANEL_COLOR,
        borderColor: FOREGROUND_PANEL_COLOR,
        opacity: 0.8,
        paddingTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            height: '50rem',
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: '1rem'
        }
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18
        }
    },
    formpanel2: {
        borderStyle: 'solid',
        borderWidth: FORM_PANEL_BORDER_WIDTH,
        borderRadius: '18px',
        marginTop: '2rem',
        backgroundColor: BACKGROUND_PANEL_COLOR,
        borderColor: FOREGROUND_PANEL_COLOR,
        color: FOREGROUND_PANEL_COLOR,
        opacity: 0.8,
        // height: '150vh', // USE THIS AS EXAMPLE WITH THE HEIGHT OF THE CONTAINER - SEE Launch COMPONENT 
        [theme.breakpoints.down('md')]: {
            // maxWidth: '25rem',
            // height: '70%',
            height: 'fit-content',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: '0.6px',
            marginTop: '6rem'
        }
    },
    formborder: {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: FOREGROUND_PANEL_COLOR,
        marginRight: '6rem',
        marginLeft: '6rem'

    },
    formfieldauto: {
        borderColor: 'red'
    },
    formfield: {
        width: '80%',
        opacity: 1,
        borderStyle: 'none'
    },
    faautosize: {
        marginLeft: '7rem',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    formTitle: {
        fontSize: '1.5rem',
        color: FOREGROUND_PANEL_COLOR
    },
    labelText: {
        width: '80%',
        // position: 'absolute',
        // left: '10%',
        display: 'block',
        margin: '0 auto',
        opacity: 1,
        borderStyle: 'none',
        marginBottom: '1.5rem',
        color: FOREGROUND_PANEL_COLOR,
        fontSize: '0.7rem',
        fontFamily: 'inherit',
        lineHeight: 1.6
    },
    link: {
        color: FOREGROUND_PANEL_COLOR,
        fontWeight: 'bold'
    },
    panel: {
        position: 'absolute',
        top: '50%',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
            position: 'static',
            marginTop: '5rem'
        },
    },
    buttonpanel: {
        display: 'flex'
    },
    panel1: {
        marginTop: '12rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            margin: '0 auto',
            marginTop: '4rem'
        }
    },
    panel2: {
        marginTop: '5rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            margin: '0 auto',
            marginTop: '0'
        }
    },
    launchformpadding: {
        textAlign: 'center',
        marginTop: '-21rem',
        marginLeft: '10rem',
        marginRight: '10rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-20rem',
            marginLeft: '1rem',
            marginRight: '1rem',
        },
        [theme.breakpoints.only('md')]: {
            marginTop: '-22rem',
            mLargineft: '5rem',
            marginRight: '5rem'
        },
    },
    areaspacing: {
        // marginTop: '24rem',
        width: '98vw',
        marginLeft: '-9rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '12rem',
            width: '92vw',
            marginLeft: 0
        },
    },
    buttonspacing: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '10rem',
        },
        [theme.breakpoints.only('md')]: {
            marginTop: '22rem',
        }
    },
    formdefspacing: {
        marginTop: '5rem',
        // width: '98vw',
        // marginLeft: '-9rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '11rem',
            width: '92vw',
            marginLeft: 0
        },
    },
    forminfospacing: {
        marginTop: '2rem',
        // width: '98vw',
        // marginLeft: '-9rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '11rem',
            width: '92vw',
            marginLeft: 0
        },
    },
    areaForm: {
        display: 'flex',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    radiobutton1: {
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            // display: 'flex'
            marginLeft: '4rem'
        }
    },
    button1: {
        display: 'inline-block',
        marginRight: '4rem',
        marginLeft: '3rem',
        // maxWidth: '14rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginRight: 0,
            marginLeft: 0,
        }
    },
    button2: {
        display: 'inline-block',
        marginRight: '4rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginRight: 0
        }
    },
    instructions: {
        fontSize: '0.9rem',
        marginLeft: '7rem',
        marginRight: '7rem',
        marginTop: '1em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            marginLeft: '2rem',
            marginRight: '2rem',
        }
    },
    buttonPos1: {
        width: '12rem',
        marginBottom: '1rem',
        marginLeft: '24rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            // marginLeft: '3rem',
            marginRight: '2rem',
            marginBottom: '2rem',
            minWidth: '11rem',
            width: '8rem'
        }
    },
    buttonPos2: {
        width: '12rem',
        marginBottom: '1rem',
        marginRight: '24rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            minWidth: '11rem',
            width: '8rem'
            // marginLeft: '9rem',
            // marginRight: '2rem',
            // width: '20rem'
        }
    },
    summaryPanel: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: '18px',
        backgroundColor: BACKGROUND_BUTTON_COLOR,
        fontSize: '1.2rem',
        color: 'white',
        height: '20rem',
        maxWidth: '11rem',
        [theme.breakpoints.down('sm')]: {
            height: '11rem',
            maxWidth: '100rem',
            marginBottom: '1rem'
        },

        // TEST FOR TABLETS...
        [theme.breakpoints.only('md')]: {
            backgroundColor: 'red',
        },
    },
    competitionpanel: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '2px',
        borderRadius: '18px',
        backgroundColor: BACKGROUND_BUTTON_COLOR,
        fontSize: '1.2rem',
        color: 'white',
        height: '7rem',
        margin: '1rem',
        display: 'flex',
        // maxWidth: '11rem',
        [theme.breakpoints.down('sm')]: {
            height: '11rem',
            // maxWidth: '100rem',
            marginBottom: '1rem',
            display: 'block'
        },

        // TEST FOR TABLETS...
        [theme.breakpoints.only('md')]: {
            backgroundColor: 'red',
        },
    },
    comptitionpanelpadding: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        // paddingTop: '2rem',
        marginLeft: '6rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
            justifyContent: 'center',
            margin: '0 auto',
        }
    },
    competitionbutton: {
        // marginTop: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0.5rem',
        background: BACKGROUND_DARK_BUTTON_COLOR,
        color: 'white',
        width: '8em',
        height: '2.5rem',
        fontSize: '1.0rem',
        '&:hover': {
            backgroundColor: '#256381',
            opacity: 0.7
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        }
    },
    largeSummaryPanel: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '18px',
        backgroundColor: BACKGROUND_PANEL_COLOR,
        fontSize: '1.2rem',
        color: 'white',
        height: 'fit-content',
        // maxWidth: '60vw',
        width: '70vw',
        marginTop: '-1.5rem',
        paddingBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            borderStyle: 'none',
            height: '45rem',
            maxWidth: '91vw',
            width: '91vw',
            marginBottom: '1rem',
            marginTop: '3rem'
        },

        // TEST FOR TABLETS...
        [theme.breakpoints.only('md')]: {
            backgroundColor: 'red',
        },
    },

    summaryPanelPosition: {
        marginTop: '1rem',
        marginLeft: '5.5rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginRight: '2rem'
        }
    },
    summaryPanelPadding: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
        }
    },
    summaryPanelBody: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '0.8rem',
        lineHeight: '50%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
        }
    },
    summaryPanelTitle: {
        fontSize: '1.5rem'
    },
    facontent: {
        marginRight: '4.5rem',
        marginLeft: '4.5rem',
        width: '30rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1rem',
            textAlign: 'center',
            width: '100%'
            // width: '14rem'
        }
    },
    fatable: {
        display: 'flex',
        width: '73.5vw',
        [theme.breakpoints.down('sm')]: {
            width: '85vw',
            // margin: 'auto',
            display: 'block',
            textAlign: 'center',
        }
    },
    fatableout: {
        display: 'flex',
        width: '61vw',
        [theme.breakpoints.down('sm')]: {
            width: '85vw',
            display: 'block',
            textAlign: 'center',


        }
    },
    fainstruction: {
        marginLeft: '-1rem',
        width: '62vw',
        fontSize: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            // width: '18rem',
            // marginLeft: '1rem',
            // marginRight: '2rem'

            // display: 'flex',
            // 'flexDirection': 'column',
            // 'justifyContent': 'center',
            margin: '0 auto'

        }
    },
    fatableright: {
        marginLeft: '3rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0,
            marginTop: '1rem'
        }
    },
    fatoutdoors: {
        width: '30rem',
        justifyContent: 'center',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '23rem'
        }
    },
    fabuttons: {
        display: 'flex',
        marginTop: '-2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginTop: '2rem'
        }
    },
    pdbuttons: {
        display: 'flex',
        // marginTop: 'rem',
        [theme.breakpoints.down('sm')]: {
            // display: 'flex',
            marginTop: '2rem'
        }
    },
    fainfopanelposition: {
        marginTop: '1rem',
        marginLeft: '4rem',
        width: '50rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem',
            width: '10rem',
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    fabuttonpanel: {
        marginLeft: '-1rem',
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-4rem',
            width: '20rem'
        }
    },
    facollapsestyling: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        // marginTop: '10rem', 
        // marginLeft: '-15rem', 
        width: '20rem',
        [theme.breakpoints.down('sm')]: {
            top: '70%',
            left: '10%',
            // width: '20rem'
        }
    },
    projectinfopanel: {
        width: '30rem',
        fontSize: '1.0rem',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginRight: '2rem'
        }
    },
    pspanel: {
        width: '30rem',
        fontSize: '1.0rem',
        marginTop: '1rem',
        marginLeft: '-4rem',
        [theme.breakpoints.down('sm')]: {
            width: 'fit-content',
            marginLeft: '-4rem',
            // justifyContent: 'center',
            // margin: '0 auto'
        }
    },
    projectinfotext: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        minWidth: '32rem',
        fontSize: '0.8rem',
        marginTop: '0.5rem',
        [theme.breakpoints.down('sm')]: {
            minWidth: 0
        }
    },
    projectinfotext2: {
        maxWidth: '20rem',
        [theme.breakpoints.down('sm')]: {
            width: '11rem',
        }
    },
    pisummarypanelposition: {
        marginTop: '1rem',
        marginLeft: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginRight: '2rem'
        }
    },
    piformpanel2: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '18px',
        marginTop: '2rem',
        backgroundColor: BACKGROUND_PANEL_COLOR,
        borderColor: FOREGROUND_PANEL_COLOR,
        color: FOREGROUND_PANEL_COLOR,
        opacity: 0.8,
        marginLeft: '-8rem',
        marginRight: '-7rem',
        // height: '150vh', // USE THIS AS EXAMPLE WITH THE HEIGHT OF THE CONTAINER - SEE Launch COMPONENT 
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: '0.6px',
            marginTop: '11rem',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '24rem'
        },
        [theme.breakpoints.only('md')]: {
            // maxWidth: '25rem',
            // height: '70%',

            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    pdformpanel2: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '18px',
        marginTop: '2rem',
        backgroundColor: BACKGROUND_PANEL_COLOR,
        borderColor: FOREGROUND_PANEL_COLOR,
        color: FOREGROUND_PANEL_COLOR,
        opacity: 0.8,
        marginLeft: '-8rem',
        marginRight: '-7rem',
        // height: '150vh', // USE THIS AS EXAMPLE WITH THE HEIGHT OF THE CONTAINER - SEE Launch COMPONENT 
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: '0.6px',
            marginTop: '2rem',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '24rem'
        },
        [theme.breakpoints.only('md')]: {
            // maxWidth: '25rem',
            // height: '70%',

            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    pilistpanel: {
        maxWidth: '25rem',
        marginTop: '2rem',
        marginLeft: '6rem',
        [theme.breakpoints.down('sm')]: {
            // width: '60rem',
            marginLeft: '1rem',
            width: '24rem'
        }
    },
    pifield: {
        width: '40rem',
        marginRight: '2rem',
        [theme.breakpoints.down('sm')]: {
            // width: '60rem',
            marginRight: '0',
            width: '20rem'
        }
    },
    pifieldpanel: {
        display: 'flex',
        marginTop: '-3.5rem',
        width: '68vw',
        justifyContent: 'center',
        margin: '0 auto',
        height: '5rem',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '93vw',
            height: '7rem',
            justifyContent: 'center',
            margin: '0 auto',
            marginTop: '4rem'
        }
    },
    pirequirements: {
        marginTop: '0rem',
        marginLeft: '2rem',
        marginRight: '3rem',
        height: '23rem',
        width: '25rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0 auto',
            marginTop: '3rem',
            height: '10rem',
        }
    },
    pitextarea: {
        marginLeft: '0rem',
        marginTop: '-2.5rem',
        width: '18vw',
        [theme.breakpoints.down('sm')]: {
            width: '20rem'
        }
    },
    pibuttons: {
        marginTop: '1rem'
    },
    piuploadbutton: {
        backgroundColor: BACKGROUND_DARK_BUTTON_COLOR,
        '&:hover': {
            backgroundColor: BACKGROUND_BUTTON_HOVER_COLOR
        },
    },
    piheader: {
        marginTop: '1rem',
        fontSize: '1.0rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0 auto',
            width: '23rem'
        }
    },
    psroot: {
        flexGrow: 1,
        padding: theme.spacing(2),
        minWidth: '50rem',
        maxHeight: '20rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            maxHeight: '50rem',
            minWidth: '20rem'
        }
    },
    pscard: {
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: 0,
        borderColor: 'red',
        boxShadow: "none",
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginRight: '2rem'
        }
    },
    pscardnoborder: {
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: 0,
        borderColor: 'transparent',
        boxShadow: "none",
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginRight: '2rem'
        }
    },
    pscardhover: {
        transition: "transform .2s", /* Animation */
        '&:hover': {
            transform: 'scale(1.5)',
            zIndex: '1300',
        }
    },
    biginnerstyle: {
        width: '100vw',
        textAlign: 'left',
        marginLeft: '2rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    smallinnerstyle: {
        textAlign: 'left',
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            lineHeight: '1rem'
        }
    },
    pslistpanel: {
        maxWidth: '25rem',
        marginTop: '2rem',
        marginLeft: '6rem',
        height: '12rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5rem',
            width: '24rem'
        }
    },
    pspopover: {
        opacity: 0.9,
        width: '80rem',
        height: '23rem',
        [theme.breakpoints.down('sm')]: {
            width: '26.5rem'
        }
    },
    pstypogrpahy: {
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            left: '40px'
        }
    },
    psformpanel2: {
        marginTop: '4rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '11rem',
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    psummformpanel2: {
        marginTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '11rem',
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    pdraftpanel: {
        marginTop: '7rem',
        marginBottom: '1rem',
        width: '54rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3rem',
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    pdraftprojectspanel: {
        height: '22rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: '38rem',
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    piradiobutton: {
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            // display: 'flex'
            marginLeft: 0
        }

    },
    psumpanelposition: {
        marginTop: '1rem',
        // marginLeft: '1.5rem',
        width: '90vw',
        justifyContent: 'center',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginRight: '2rem'
        }
    },
    psinfopanel: {
        backgroundColor: BACKGROUND_INFO_PANEL_COLOR,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: 'white',
        paddingRight: '1rem',
        paddingLeft: '1rem'
    },
    pslabelstyle: {
        textAlign: 'left',
        marginLeft: 0,
        minWidth: '10rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            minWidth: '9.3rem',
            lineHeight: '1rem'
        }
    },
    psreq: {
        marginTop: '-4px',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        }
    },
    psupload: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '17px'
        }
    },
    psuploadfiles: {
        lineHeight: 'inherit',
        [theme.breakpoints.down('sm')]: {
            marginTop: '23px'
        }
    },

    psfilelist: {
        marginTop: '6px',
        listStyle: 'none',
        padding: 0,
        lineHeight: '150%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-8px'
        }
    },
    psinfopanelposition: {
        fontSize: '0.8rem',
        textAlign: 'justify',
        marginLeft: '1rem',
        marginRight: '1rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem'
        }
    },
    psouter: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    paybutton: {
        width: '12rem',
        marginBottom: '1rem',
        marginRight: '10rem',
        marginLeft: '6rem',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        [theme.breakpoints.down('sm')]: {
            width: '8rem',
            marginRight: 0,
            marginLeft: 0
        },
    }
}));
