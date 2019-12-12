import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.down('md')]: {
        flagMenu: {
            right: theme.spacing(-16),
            bottom: theme.spacing(-0.4)
        }
    }
}));

const FlagMenu = ({ language, onSelect }) => {
    const classes = useStyles();

    return (
        <ReactFlagsSelect
            className = {classes.flagMenu}
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={onSelect}
            defaultCountry={language === 'en' ? 'GB' : 'RO'}
            countries={['GB', 'RO']}
        />
    );
};

export default FlagMenu;
