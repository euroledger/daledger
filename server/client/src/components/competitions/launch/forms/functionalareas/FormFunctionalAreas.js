import React, { useContext } from 'react';
import { useStyles } from '../../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../../ProfileContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FunctionalAreaTable from './MyEditableTable';
import SummaryPanel from './SummaryPanel';
import InfoPanel from './InfoPanel';
import ButtonGroup from '../ButtonGroup';

const FormFunctionalAreas = ({
    prevStep,
    rows,
    rowsRight,
    columns,
    handleRowUpdate,
    handleChange,
    handleSubmit,
    values,
    objective
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    const buttonItems = [
        { value: 'true', label: translations.projectCoverageRadioOption1 },
        { value: 'false', label: translations.projectCoverageRadioOption2 }
    ];

    return (
        <div  className={`${classes.formpanel2} ${classes.areaspacing} `} >
            <div
                style={{
                    borderBottom: '1px solid black',
                    marginRight: '6rem',
                    marginLeft: '6rem'
                }}
            >
                <p className={classes.formTitle}>{translations.functionalAreaTitle}</p>
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
                            <div className={classes.areaForm}>
                                <div className={classes.summaryPanelPosition}>
                                    <SummaryPanel objective={objective}/>
                                </div>

                                <div
                                    className={classes.facontent}
                                >
                                    <div
                                       className={classes.fainstruction}
                                    >
                                        <p>
                                            {translations.functionalAreaInstructions}
                                        </p>
                                    </div>

                                    <div className={classes.fatable}
                                    >
                                        <div>
                                            <FunctionalAreaTable rows={rows} columns={columns} handleRowUpdate={handleRowUpdate} side="left"></FunctionalAreaTable>
                                        </div>

                                        <div className={classes.fatableright}>
                                            <FunctionalAreaTable rows={rowsRight} columns={columns} handleRowUpdate={handleRowUpdate} side="right"></FunctionalAreaTable>
                                        </div>
                                        <div className={classes.fainfopanelposition}>
                                            <InfoPanel />
                                            <div className={classes.fabuttonpanel}>
                                                <ButtonGroup
                                                    title={translations.projectCoverageTitle}
                                                    selected='true'
                                                    buttonItems={buttonItems}
                                                    onChange={handleChange}
                                                    name='entireprop'
                                                    display="block"
                                                ></ButtonGroup>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <br></br>

                            <div style={{ display: 'flex', marginTop: '-2rem' }}>
                                <Button
                                    size='medium'
                                    // type='submit'
                                    onClick={prevStep}
                                    className={`${classes.button} ${classes.formButton}`}
                                    style={{
                                        width: '12rem',
                                        marginBottom: '1rem'
                                        // marginRight: '24rem'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    {translations.prevButtonText}
                                </Button>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton}`}
                                    style={{
                                        width: '12rem',
                                        marginBottom: '1rem'
                                        // marginLeft: '24rem'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    {translations.homeButtonText}
                                </Button>
                                <Button
                                    size='medium'
                                    type='submit'
                                    className={`${classes.button} ${classes.formButton}`}
                                    style={{
                                        width: '12rem',
                                        marginBottom: '1rem'
                                        // marginRight: '24rem'
                                    }}
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

export default FormFunctionalAreas;
