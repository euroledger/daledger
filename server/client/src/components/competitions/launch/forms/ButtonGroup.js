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
    const [value, setValue] = React.useState(selected);

    const handleChange = event => {
        setValue(event.target.value);
        onChange(name, event)
    };
    
    const useStyles = makeStyles({
        root: {
            // component default is "inline-flex", using "flex" makes the
            // label + control group use the entire width of the parent element
            display: display,
            // component default is "flex-start", using "space-between" pushes
            // both flexed content to the right and left edges of the flexbox
            // Note: the content is aligned to the right by default because
            // the 'labelPlacement="start"' component prop changes the flexbox
            // direction to "row-reverse"
            // justifyContent: "space-between",
        },
    });
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
                        // labelPlacement="start"
                        classes={classes}

                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default ButtonGroup;
