// import React, { useContext } from 'react';
import React from 'react';
// import { useStyles } from '../../../containerstyle';
// import ProfileContext from '../../../ProfileContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/core/styles";

const ButtonGroup = ({ title, selected, onChange, buttonItems, name, display }) => {
    const handleChange = event => {
        onChange(name, event)
    };

    const useStyles = makeStyles({
        root: {
            display: display
        },
    });
    const classes = useStyles();
    return (
        <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>{title}</FormLabel>
            <RadioGroup
                name={name}
                value={selected}
                onChange={handleChange}
            >
                {buttonItems.map(item => (
                    <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio data-test={`${name}-${item.value}`} />}
                        label={item.label}
                        classes={classes}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default ButtonGroup;
