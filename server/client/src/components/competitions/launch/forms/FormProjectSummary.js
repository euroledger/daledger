import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Form } from 'formik';
import FormButtonPanel from './controls/FormButtonPanel';
import LargeSummaryPanel from '../forms/controls/LargeSummaryPanel';

const FormProjectSummary = ({
    handleSubmit,
    prevStep,
    values,
    setFieldValue
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const objective = values.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel;
    const indoors = values.indooroutdoor === 'indoor';

    const submit = (values) => {
        handleSubmit(values);
    }

    return (
        <div className={`${classes.piformpanel2} ${classes.psummformpanel2} ${classes.forminfospacing} `}>
            <div
                style={{
                    borderBottom: '1px solid black',
                    marginRight: '6rem',
                    marginLeft: '6rem',
                }}
            >
                <p className={classes.formTitle}>Project Summary</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
                onSubmit={(values) => {
                    submit(values);
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <div  >
                            <div className={classes.areaForm}>
                                <div style={{ justifyContent: 'center', margin: '0 auto', marginTop: '2rem' }}>
                                    <LargeSummaryPanel values={values} objective={objective} indoors={indoors} large={true} setFieldValue={setFieldValue} />
                                </div>
                            </div>
                            <div className={classes.pibuttons}>
                                <FormButtonPanel style={{ marginTop: '1rem' }}
                                    isSubmitting={isSubmitting}
                                    prevStep={prevStep}
                                    button3text={translations.launchButtonText}
                                    payment={true}
                                ></FormButtonPanel>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    );
};


export default FormProjectSummary;