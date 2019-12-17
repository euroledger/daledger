import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    container: {
        height: '91vh',
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
        fontSize: '2rem',
        background: 'transparent',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '25rem',
        height: '4.5rem',
        '&:hover': {
            backgroundColor: '#616060',
            opacity: 0.4
        },
        marginTop: 0,
        [theme.breakpoints.down('md')]: {
            width: '19rem',
            marginTop: '2rem'
        }
    },
    formButton: {
        marginTop: '7rem',
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
        position: 'absolute',
        top: '30%',
        height: '50vh',
        width: '50vw',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '18px',
        backgroundColor: '#E9E7E7',
        borderColor: 'black',
        opacity: 0.8,
        paddingTop: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            width: '90%',
            paddingLeft: 0,
            paddingRight: 0
        },
    },
    formfield: {
        width: '80%',
        // backgroundColor: 'white',
        opacity: 1,
        // borderStyle: 'solid',
        // borderWidth: '2px',
        // borderRadius: '10px',
        borderStyle: 'none',
        // color: 'red',
        margin: theme.spacing(1),
        marginTop: theme.spacing(3),
        marginBottom: '-0.3em'
    },
    labelText: {
        width: '80%',
        position: 'absolute',
        left: '10%',
        opacity: 1,
        borderStyle: 'none',
        // color: 'red',
        marginBottom: theme.spacing(2),
        color: 'black',
        fontSize: '0.4em',
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
        top: '50%'
    }
}));
