import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
// import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../ProfileContext';
import { Formik } from 'formik';
// import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
// import ButtonGroup from './controls/ButtonGroup';
import FormButtonPanel from './controls/FormButtonPanel';


const FormProjectStyle = ({
    handleSubmit,
    handleChange,
    prevStep,
    values
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    // const objective = values.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel;
    // const indoors = values.indooroutdoor === 'indoor';

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    let buttonFocus;

    const setFocus = (focus) => {
        buttonFocus = focus;
    }
    const submit = (values) => {

        console.log("button focus = ", buttonFocus);
        console.log("values = ", values)
        if (buttonFocus === "prev") {
            prevStep(values);
        } else {
            handleSubmit(values)
        }
    }

    return (
        <div className={`${classes.piformpanel2} ${classes.forminfospacing} `}>
            <div
                style={{
                    borderBottom: '1px solid black',
                    marginRight: '6rem',
                    marginLeft: '6rem',
                }}
            >
                <p className={classes.formTitle}>Project Style</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // handleSubmit(values)
                    submit(values);
                }}
            >
                {({ values, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className={classes.pibuttons}>
                            <FormButtonPanel style={{ marginTop: '1rem' }}
                                isSubmitting={isSubmitting}
                                prevStep={prevStep}
                            ></FormButtonPanel>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};


export default FormProjectStyle;