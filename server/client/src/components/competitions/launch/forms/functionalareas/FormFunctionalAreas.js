import React, { useContext } from 'react';
import { useStyles } from '../../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../../ProfileContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FunctionalAreaTable from './MyEditableTable';

const FormFunctionalAreas = ({
    prevStep,
    rows,
    rowsRight,
    columns,
    handleRowUpdate,
    handleSubmit,
    values
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    return (
        <div className={classes.formpanel2} style={{
            marginTop: '1rem',
            width: '98vw',
            marginLeft: '-9rem'
        }}>
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
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        marginTop: '10px',
                                        marginLeft: '5.5rem',
                                        borderStyle: 'solid',
                                        borderColor: 'white',
                                        borderWidth: '2px',
                                        borderRadius: '18px',
                                        backgroundColor: '#3399CC',
                                        fontSize: '1.2rem',
                                        color: 'white'
                                    }}
                                >
                                    <div
                                        style={{
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            paddingTop: '80px'
                                        }}
                                    >
                                        <p>Residential</p>
                                        <p>New Space</p>
                                        <p>Indoor</p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginRight: '4.5rem',
                                        marginLeft: '4.5rem',
                                        width: '30rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            marginLeft: '-1rem',
                                            width: '62vw',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        <p>
                                            {translations.functionalAreaInstructions}
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', width: '60vw' }}
                                    >
                                        <div>
                                            <FunctionalAreaTable rows={rows} columns={columns} handleRowUpdate={handleRowUpdate} side="left"></FunctionalAreaTable>
                                        </div>

                                        <div style={{ marginLeft: '3rem' }}>
                                            <FunctionalAreaTable rows={rowsRight} columns={columns} handleRowUpdate={handleRowUpdate} side="right"></FunctionalAreaTable>
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
                                    Previous
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
                                    My Home Page
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

export default FormFunctionalAreas;
