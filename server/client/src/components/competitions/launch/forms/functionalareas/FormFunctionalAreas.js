import React, { useContext } from 'react';
import { useStyles } from '../../../../containerstyle';
import ProfileContext from '../../../../../ProfileContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FunctionalAreaTable from './MyEditableTable';
import SummaryPanel from '../SummaryPanel';
import InfoPanel from './InfoPanel';
import ButtonGroup from '../controls/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import FormButtonPanel from '../controls/FormButtonPanel';

const FormFunctionalAreas = ({
    prevStep,
    rows,
    rowsRight,
    columns,
    outdoorRows,
    outdoorColumns,
    handleRowUpdate,
    handleChange,
    handleSubmit,
    values,
    objective,
    indooroutdoor
}) => {

    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const [open, setOpen] = React.useState(false);

    const validationSchema = Yup.object().shape({
        country: Yup.string().required(translations.error2Text)
    });

    const buttonItems = [
        { value: 'true', label: translations.projectCoverageRadioOption1 },
        { value: 'false', label: translations.projectCoverageRadioOption2 }
    ];
    const indoors = indooroutdoor === 'indoor';

    const submit = (values) => {
        if (!indoors) {
            const found = outdoorRows.find(row => (row.number > 0 && row.size === 0) || (row.number === 0 && row.size > 0));
            if (found) {
                setOpen(true);
                return;
            }
        }
        handleSubmit(values)
    }

    const renderInstructions = () => {
        if (indoors) {
            return (
                <p>
                    {translations.functionalAreaInstructions}
                </p>
            )
        } else {
            return (
                <p>
                    {translations.functionalAreaOutdoorInstructions}
                </p>
            )
        }
    }
    const renderContent = () => {
        if (indoors) {
            return (
                <>
                    <div className={classes.fatable}>
                        <div>
                            <FunctionalAreaTable rows={rows} columns={columns} handleRowUpdate={handleRowUpdate} side="left" indoors={indoors}>
                            </FunctionalAreaTable>
                        </div>

                        <div className={classes.fatableright}>
                            <FunctionalAreaTable rows={rowsRight} columns={columns} handleRowUpdate={handleRowUpdate}             side="right" indoors={indoors}>
                            </FunctionalAreaTable>
                        </div>
                        <div className={classes.fainfopanelposition}>
                            <InfoPanel />
                            <div className={classes.fabuttonpanel}>
                                <ButtonGroup
                                    title={translations.projectCoverageTitle}
                                    selected={values.entireprop}
                                    buttonItems={buttonItems}
                                    onChange={handleChange}
                                    name='entireprop'
                                    display="block"
                                ></ButtonGroup>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className={classes.fatableout}>
                    <div className={classes.fatoutdoors}>
                        <FunctionalAreaTable rows={outdoorRows} columns={outdoorColumns} handleRowUpdate={handleRowUpdate} side="outdoors" indoors={indoors}></FunctionalAreaTable>
                    </div>
                </div>
            )
        }

    }
    return (
        <div className={`${classes.formpanel2} ${classes.areaspacing} `} >
            <div className={classes.formborder}
                // style={{
                //     borderBottom: '1px solid black',
                //     marginRight: '6rem',
                //     marginLeft: '6rem'
                // }}
            >
                <p className={classes.formTitle}>{translations.functionalAreaTitle}</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={values => {
                    submit(values);
                }}
            >
                {({ values, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} autoComplete='xxxx'>
                        <div>
                            <div className={classes.areaForm}>
                                <div className={classes.summaryPanelPosition}>
                                    <SummaryPanel objective={objective} indoors={indoors} />
                                </div>

                                <div
                                    className={classes.facontent}
                                >
                                    <div
                                        className={classes.fainstruction}
                                    >
                                        {renderInstructions()}
                                    </div>
                                    {renderContent()}
                                </div>
                                <Collapse in={open} className={classes.facollapsestyling}>
                                    <Alert
                                        severity="error"
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                    >
                                        {translations.functionaAreaTableError}
                                    </Alert>
                                </Collapse>
                            </div>

                            <br></br>

                            <FormButtonPanel
                                isSubmitting={isSubmitting}
                                prevStep={prevStep}
                                button3text={translations.continueButtonText}
                            ></FormButtonPanel>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default FormFunctionalAreas;
