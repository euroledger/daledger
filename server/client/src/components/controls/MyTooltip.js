import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const MyTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 820,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9'
    }
}))(Tooltip);

export default MyTooltip;