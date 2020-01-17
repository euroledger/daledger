import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    container: {
        height: '91vh',
        // width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 'calc(1rem + 2vmin)',
        color: 'white',
        background:
            'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(carmen.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('sm')]: {
            height: '230vh',
        }
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
            backgroundColor: '#616060',
            opacity: 0.4
        },
        marginTop: 0,
        [theme.breakpoints.down('sm')]: {
            width: '19rem',
            marginTop: '2rem',
            fontSize: '1.2rem'
        }
    },
    formButton: {
        marginTop: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',

        background: '#3399CC',
        color: 'white',
        width: '8em',
        height: '2.8em',
        fontSize: '1.0rem',
        '&:hover': {
            backgroundColor: '#256381',
            opacity: 0.7
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        }
    },
    formpanel: {
        marginTop: '10rem',
        height: '60vh',
        width: '50vw',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '18px',
        backgroundColor: '#E9E7E7',
        borderColor: 'black',
        opacity: 0.8,
        paddingTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            // height: '70%',
            height: '70vh',
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
        borderWidth: '1px',
        borderRadius: '18px',
        marginTop: '3rem',
        backgroundColor: '#E9E7E7',
        borderColor: 'black',
        color: 'black',
        opacity: 0.8,
        // height: '150vh', // USE THIS AS EXAMPLE WITH THE HEIGHT OF THE CONTAINER - SEE Launch COMPONENT 
        [theme.breakpoints.down('sm')]: {
            maxWidth: '25rem',
            // height: '70%',
            height: 'fit-content',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: '0.6px',
            marginTop: '10rem'
        }
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
            marginLeft: '2rem',
            width: '80%',
        }
    },
    formTitle: {
        fontSize: '1.5rem',
        color: 'black'
    },
    labelText: {
        width: '80%',
        // position: 'absolute',
        // left: '10%',
        display: 'block',
        margin: '0 auto',
        opacity: 1,
        borderStyle: 'none',
        // color: 'red',
        marginBottom: '1.5rem',
        color: 'black',
        fontSize: '0.7rem',
        fontFamily: 'inherit',
        lineHeight: 1.6
    },
    link: {
        color: 'blue'
    },
    input: {
        color: 'white'
    },
    panel: {
        position: 'absolute',
        top: '50%',
        width: '100vw',
        [theme.breakpoints.down('sm')]: {
            // width: 'auto'
        },
    },
    buttonpanel: {
        display: 'flex'
    },
    panel1: {
        position: 'absolute',
        top: '40%',
        [theme.breakpoints.down('sm')]: {
            top: '32%',
            left: '-5%'
        },

        margin: '0 auto'
    },
    panel2: {
        position: 'absolute',
        top: '60%',
        [theme.breakpoints.down('sm')]: {
            top: '70%',
            left: '-5%'
        }
    },
    launchformpadding: {
        textAlign: 'center',
        marginTop: '-19rem',
        marginLeft: '10rem',
        marginRight: '10rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1rem',
            marginRight: '1rem',
        },
    },
    areaspacing: {
        marginTop: '1rem',
        width: '98vw',
        marginLeft: '-9rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10rem',
            width: '92vw',
            marginLeft: 0
        },
    },
    areaForm: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    radiobutton1: {
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            // display: 'flex'
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
            marginLeft: '3rem',
            marginRight: '2rem',
            marginBottom: '2rem',
            minWidth: '10rem'
        }
    },
    buttonPos2: {
        width: '12rem',
        marginBottom: '1rem',
        marginRight: '24rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            minWidth: '7rem',
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
        backgroundColor: '#3399CC',
        fontSize: '1.2rem',
        color: 'white',
        height: '20rem',
        [theme.breakpoints.down('sm')]: {
            height: '8rem',
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
        paddingTop: '6rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
        }
    },
    facontent: {
        marginRight: '4.5rem',
        marginLeft: '4.5rem',
        width: '30rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1rem',
            textAlign: 'center',
            width: '14rem'
        }
    },
    fatable: {
        display: 'flex',
        width: '73.5vw',
        [theme.breakpoints.down('sm')]: {
            width: '85vw',
            display: 'block',
            textAlign: 'center'
        }
    },
    fainstruction: {
        marginLeft: '-1rem',
        width: '62vw',
        fontSize: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            width: '18rem',
            marginLeft: '1rem',
            marginRight: '2rem'
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
    fainfopanelposition: {
        marginTop: '1rem',
        marginLeft: '4rem',
        width: '50rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '6rem',
            width: '10rem'
        }
    },
    fabuttonpanel: {
        marginLeft: '-1rem',
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-4rem',
            width: '20rem'
        }
    }
}));
