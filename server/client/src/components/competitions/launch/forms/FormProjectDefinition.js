import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import ButtonGroup from './ButtonGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countriesEN from './data/countriesEN';
import countriesRO from './data/countriesRO';



const FormProjectDefinition = ({
    handleSubmit,
    handleChange,
    setCountry,
    values
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    let countries = countriesEN;
    if (translations.language === "ro") {
        countries = countriesRO;
    }

    // console.log("countries = ", countries);
    const getCountryByCode = code => {
        return countries.find(obj => {
            return obj.code === code;
        });
    };

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    // TODO move into the translation locale files
    const spaceButtonItems = [
        { value: 'residential', label: translations.projectDefinitionCountryRadio1Option1 },
        { value: 'commercial', label: translations.projectDefinitionCountryRadio1Option2 }
    ];
    const doorButtonItems = [
        { value: 'indoor', label: translations.projectDefinitionCountryRadio2Option1 },
        { value: 'outdoor', label: translations.projectDefinitionCountryRadio2Option2 }
    ];
    const objectiveButtonItems = [
        { value: 'newspace', label: translations.projectDefinitionCountryRadio3Option1 },
        { value: 'remodelling', label: translations.projectDefinitionCountryRadio3Option2 }
    ];
    const savedCountry = getCountryByCode(values.country);
    return (
        <div className={`${classes.formpanel2} ${classes.formdefspacing} `}>
            <div
                style={{
                    borderBottom: '1px solid black',
                    marginRight: '6rem',
                    marginLeft: '6rem'
                }}
            >
                <p className={classes.formTitle}>{translations.projectDefinitionTitle}</p>
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
                            <div className={classes.radiobutton1}>
                                <div
                                    className={classes.button1}
                                >
                                    <ButtonGroup
                                        title={translations.projectDefinitionRadioTitle1}
                                        selected={values.space}
                                        buttonItems={spaceButtonItems}
                                        onChange={handleChange}
                                        name='space'
                                        display="flex"
                                    ></ButtonGroup>
                                </div>
                                <div
                                    className={classes.button2}
                                >
                                    <ButtonGroup
                                        title={translations.projectDefinitionRadioTitle2}
                                        selected={values.objective}
                                        buttonItems={objectiveButtonItems}
                                        onChange={handleChange}
                                        name='objective'
                                        display="flex"
                                    ></ButtonGroup>
                                </div>
                                <div className={classes.button2}>
                                    <ButtonGroup
                                        title={translations.projectDefinitionRadioTitle3}
                                        selected={values.indooroutdoor}
                                        buttonItems={doorButtonItems}
                                        onChange={handleChange}
                                        name='indooroutdoor'
                                        display="flex"
                                    ></ButtonGroup>
                                </div>
                            </div>
                            <br></br>
                            <div className={classes.faautosize}>
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
                                            label={translations.projectDefinitionCountryTitle}
                                            variant='outlined'
                                            fullWidth
                                            autoComplete='disabled'
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'disabled' // disable autocomplete and autofill
                                            }}
                                            className={classes.formfieldauto}
                                            name='country'
                                            onBlur={handleBlur}
                                            component={TextField}
                                            value={values.country}
                                        />
                                    )}
                                />
                            </div>
                            <div
                                className={classes.instructions}
                            >
                                {translations.projectDefinitionInstruction}
                            </div>
                            <div style={{ display: 'flex', 'justifyContent': 'center' }}>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton} ${classes.buttonPos1}`}
                                    // style={{
                                    //     width: '12rem',
                                    //     marginBottom: '1rem',
                                    //     marginLeft: '24rem'
                                    // }}
                                    disabled={isSubmitting}
                                >
                                    {translations.homeButtonText}
                                </Button>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton}  ${classes.buttonPos2}`}
                                    // style={{
                                    //     width: '16rem',
                                    //     marginBottom: '1rem',
                                    //     marginRight: '24rem'
                                    // }}
                                    disabled={isSubmitting}
                                >
                                    {translations.continueButtonText}
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
