// import React, { useContext } from 'react';
import React from 'react';
import { useStyles } from '../../../containerstyle';
// import ProfileContext from '../../../ProfileContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ButtonGroup = ({ title, selected, onChange, buttonItems, name }) => {
    const [value, setValue] = React.useState(selected);

    const handleChange = event => {
        setValue(event.target.value);
        onChange(name, event)
    };
    const classes = useStyles();
    return (
        <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>{title}</FormLabel>
            <RadioGroup
                name={name}
                value={value}
                onChange={handleChange}
            >
                {buttonItems.map(item => (
                    <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default ButtonGroup;
