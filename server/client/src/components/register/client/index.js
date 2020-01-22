import React, { useContext } from 'react';
import { useStyles } from '../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../ProfileContext';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import Spinner from '../../../utils/Spinner';

const ClientRegister = () => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        loading: false,
        translations: translations
    };

    const validationSchema = Yup.object().shape({
        // minimum length of 1, max 255
        firstName: Yup.string()
            .max(255, translations.error1Text)
            .required(translations.error2Text),
        lastName: Yup.string()
            .max(255, translations.error1Text)
            .required(translations.error2Text),
        email: Yup.string()
            .email(translations.error3Text)
            .required(translations.error2Text),
    });

    const [form, setValues] = React.useState(initialState);

    const handleSubmit = (values, setSubmitting, resetForm) => {
        values.loading = true;
        setValues(prevState => {
            return { ...prevState, ...values };
        });
        setSubmitting(true);
        console.log("values =", values);
        setTimeout(() => {
            resetForm();
            setSubmitting = false;
            setValues({ ...form, loading: false });
            window.location = '/auth/google';
        }, 3000);
    };
    return (
        <div
            className={classes.container}
            style={{ backgroundImage: 'url("mainimage.jpg")' }}
            data-test='contentComponent'
        >
            <div className={classes.formpanel}>
                <Formik
                    enableReinitialize
                    initialValues={initialState}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        handleSubmit(values, setSubmitting, resetForm);
                    }}
                >
                    {({
                        values,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                            <form onSubmit={handleSubmit} autoComplete='off'>
                                <div>
                                    <Field
                                        data-test='firstName'
                                        className={classes.formfield}
                                        label={translations.firstName}
                                        name='firstName'
                                        onBlur={handleBlur}
                                        value={values.first}
                                        component={TextField}
                                    />

                                    <Spinner active={form.loading}></Spinner>

                                    <Field
                                        data-test='lastName'
                                        className={classes.formfield}
                                        label={translations.lastName}
                                        name='lastName'
                                        onBlur={handleBlur}
                                        value={values.last}
                                        component={TextField}
                                    />
                                    <Field
                                        data-test='email'
                                        className={classes.formfield}
                                        label="Email"
                                        name='email'
                                        onBlur={handleBlur}
                                        value={values.email}
                                        component={TextField}
                                    />
                                    <p
                                        className={classes.labelText}
                                        style={{
                                            marginTop: '3rem'
                                        }}
                                    >
                                        {translations.text1}
                                        <a href='/'>{translations.text2link}</a>
                                        {translations.text3}
                                        <a href='/'>
                                            {' '}
                                            {translations.text4link}
                                        </a>{' '}
                                        {translations.text5}
                                    </p>
                                    <Button
                                        size='medium'
                                        type='submit'
                                        data-test="registerButton"
                                        className={`${classes.button} ${classes.formButton}`}
                                        disabled={isSubmitting}
                                    >
                                        {translations.registerBtn}
                                    </Button>
                                </div>
                            </form>
                        )}
                </Formik>

                <p
                    className={classes.labelText}
                    style={{
                        marginTop: '2.5rem'
                        // position: 'absolute',
                        // bottom: '0.5rem',
                        // right: '5%'
                    }}
                >
                    {translations.text6}{' '}
                    <a className={classes.link} href='/auth/google'>
                        {translations.text7link}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ClientRegister;
