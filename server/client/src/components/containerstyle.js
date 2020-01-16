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
        // backgroundImage: 'url("mainimage.jpg")',
        // backgroundImage: 'url("road.png")',
        // backgroundImage: 'url("carmen.jpg")',

        background:
            'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(carmen.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
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
        [theme.breakpoints.down('md')]: {
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
        // [theme.breakpoints.down('md')]: {
        //     width: '19rem'
        // },
        height: '2.5em',
        fontSize: '0.5em',
        '&:hover': {
            backgroundColor: '#256381',
            opacity: 0.7
        }
    },
    formpanel: {
        // position: 'absolute',
        // top: '30%',
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
        [theme.breakpoints.down('md')]: {
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
        [theme.breakpoints.down('md')]: {
            width: '90%',
            // height: '70%',
            height: '70vh',
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: '10rem'
        }
    },
    formfield: {
        width: '80%',
        opacity: 1,
        borderStyle: 'none'
        // margin: '0.5rem',
        // marginTop: '1.5rem'
        // marginBottom: '-0.3em'
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
        width: '100vw'
    },
    buttonpanel: {
        display: 'flex'
    },
    panel1: {
        position: 'absolute',
        top: '40%',
        [theme.breakpoints.down('md')]: {
            top: '32%',
            left: '-5%'
        },

        margin: '0 auto'
    },
    panel2: {
        position: 'absolute',
        top: '60%',
        [theme.breakpoints.down('md')]: {
            top: '70%',
            left: '-5%'
        }
    }
}));
