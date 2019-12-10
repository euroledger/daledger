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
       
        background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(carmen.jpg)',
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
    panel: {
        position: 'absolute',
        top: '50%'
    }
}));