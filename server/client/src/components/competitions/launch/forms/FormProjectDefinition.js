import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import ButtonGroup from './ButtonGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './data/countries';

const getCountryByCode = code => {
    return countries.find(obj => {
        return obj.code === code;
    });
};

const FormProjectDefinition = ({
    handleSubmit,
    handleChange,
    setCountry,
    values
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    // TODO move into the translation locale files
    const spaceButtonItems = [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' }
    ];
    const doorButtonItems = [
        { value: 'indoor', label: 'Indoor' },
        { value: 'outdoor', label: 'Outdoor' }
    ];
    const objectiveButtonItems = [
        { value: 'decorating', label: 'Decorating a new space' },
        { value: 'remodelling', label: 'Remodelling' }
    ];
    const savedCountry = getCountryByCode(values.country);
    return (
        <div className={classes.formpanel2}>
            <div
                style={{
                    borderBottom: '1px solid black',
                    marginRight: '6rem',
                    marginLeft: '6rem'
                }}
            >
                <p className={classes.formTitle}>Project Definition</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={values => {
                    handleSubmit(values);
                }}
            >
                {({ values, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div>
                            <div style={{ display: 'inline-block' }}>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        marginRight: '7rem'
                                    }}
                                >
                                    <ButtonGroup
                                        title='What kind of space do you need to renovate?'
                                        selected={values.space}
                                        buttonItems={spaceButtonItems}
                                        onChange={handleChange}
                                        name='space'
                                    ></ButtonGroup>
                                </div>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        marginRight: '5rem'
                                    }}
                                >
                                    <ButtonGroup
                                        title='What is the objective of your project?'
                                        selected={values.objective}
                                        buttonItems={objectiveButtonItems}
                                        onChange={handleChange}
                                        name='objective'
                                    ></ButtonGroup>
                                </div>
                                <div style={{ display: 'inline-block' }}>
                                    <ButtonGroup
                                        title='Indoor or outdoor?'
                                        selected={values.indooroutdoor}
                                        buttonItems={doorButtonItems}
                                        onChange={handleChange}
                                        name='indooroutdoor'
                                    ></ButtonGroup>
                                </div>
                            </div>
                            <br></br>
                            <Autocomplete
                                id='country-select-demo'
                                name='countries'
                                options={countries}
                                autoHighlight
                                getOptionLabel={option => option.label}
                                renderOption={option => (
                                    <React.Fragment>
                                        {option.label}
                                    </React.Fragment>
                                )}
                                value={savedCountry}
                                onChange={(_, value) => {
                                    setCountry(value);
                                }}
                                renderInput={params => (
                                    <Field
                                        {...params}
                                        label='Project Country'
                                        variant='outlined'
                                        fullWidth
                                        autoComplete='disabled'
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'disabled' // disable autocomplete and autofill
                                        }}
                                        className={classes.formfield}
                                        name='country'
                                        onBlur={handleBlur}
                                        component={TextField}
                                        value={values.country}
                                    />
                                )}
                            />
                            <div
                                style={{
                                    fontSize: '0.9rem',
                                    marginLeft: '7rem',
                                    marginRight: '7rem',
                                    marginTop: '1em'
                                }}
                            >
                                Please let us know where your space is located,
                                it will be highly useful for our professionals
                                to study and respect the local regulations
                                related to your project.
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton}`}
                                    style={{
                                        width: '12rem',
                                        marginBottom: '1rem',
                                        marginLeft: '24rem'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    My Home Page
                                </Button>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton}`}
                                    style={{
                                        width: '12rem',
                                        marginBottom: '1rem',
                                        marginRight: '24rem'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default FormProjectDefinition;
