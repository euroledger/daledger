import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Form } from 'formik';
import FormButtonPanel from './controls/FormButtonPanel';
import LargeSummaryPanel from './controls/LargeSummaryPanel';
import { Field } from 'formik';
import { fieldToTextField } from 'formik-material-ui';
import MuiTextField from '@material-ui/core/TextField';


const FormProjectSummary = ({
    prevStep,
    values,
    setFieldValue
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const objective = values.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel;
    const indoors = values.indooroutdoor === 'indoor';

    const MyTextField = (props) => {
        const id = props.field.name;
        return (
            <MuiTextField
                {...fieldToTextField(props)}
                onBlur={event => {
                    const { value } = event.target;
                    setFieldValue(id, value);
                }}
            />
        )
    }
    const getColor = () => {
        return {
            color: 'white',
            borderBottom: '1px solid white',
        }
    }

    const getAwardValue = (amount) => {
        return parseFloat(amount) * 100;
    }

    const getAwardField = () => {
        return (
            <Field className={classes.pifield} style={getColor()}
                data-test='projectaward'
                label={translations.projectSummaryYourAward}
                name='award'
                value=''
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                type='number'
                component={MyTextField}
            />
        )
    }
    return (
        <div className={`${classes.piformpanel2} ${classes.psummformpanel2} ${classes.forminfospacing} `}>
            <div className={classes.formborder}>
                <p className={classes.formTitle}>{translations.projectSummaryTitle}</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
            // onSubmit={(values) => {
            //     submit(values);
            // }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <div  >
                            <div className={classes.areaForm}>
                                <div style={{ justifyContent: 'center', margin: '0 auto', marginTop: '2rem' }}>
                                    <LargeSummaryPanel values={values} objective={objective} indoors={indoors} large={true} setFieldValue={setFieldValue} awardField={getAwardField()} />
                                </div>
                            </div>
                            <div className={classes.pibuttons}>
                                <FormButtonPanel style={{ marginTop: '1rem' }}
                                    isSubmitting={isSubmitting}
                                    prevStep={prevStep}
                                    button3text={translations.launchButtonText}
                                    payment={true}
                                    amount={getAwardValue(values.award)}
                                    projectId={values.id}
                                    disabled={values.award === ''}
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