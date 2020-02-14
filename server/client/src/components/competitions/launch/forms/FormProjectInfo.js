import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import ButtonGroup from './controls/ButtonGroup';
import FormButtonPanel from './controls/FormButtonPanel';
import SummaryPanel from './SummaryPanel';

// input imports
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';

import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField } from 'formik-material-ui';


const UpLoadField = ({ file, handler, values }) => {
    const classes = useStyles();
    return (
        <div key={file} style={{ marginBottom: '0.5rem' }} >
            <Paper className={classes.root} style={{ height: '2rem' }}>
                <InputBase
                    style={{ color: 'black', minWidth: '19rem' }}
                    className={classes.input}
                    placeholder={file}
                    inputProps={{ 'aria-label': 'file' }}
                    disabled={true}
                />
                <div className={classes.deletebutton}>
                    <IconButton style={{ color: "red" }} color="primary" className={classes.iconButton} aria-label="uploadedfile"
                        onClick={() => {
                            handler(file, values);
                        }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </Paper>
        </div>
    )
}

const FormProjectInfo = ({
    handleSubmit,
    handleChange,
    prevStep,
    values,
    handleFileUpdate,
    setFieldValue
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);
    const objective = values.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel;
    const indoors = values.indooroutdoor === 'indoor';


    // TODO move this to own component
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
    const validationSchema = Yup.object().shape({
        // minimum length of 1, max 255
        name: Yup.string()
            .max(64, translations.error1Text)
            .required(translations.error2Text),
        budget: Yup.string()
            .matches(/^\d{1,3}(,\d{3})*(\.\d+)?$/, "must be a comma delimited number")
    });

    const urgencyButtonItems = [
        { value: 'urgent', label: translations.projectInfoUrgencyButton1Label },
        { value: 'fast', label: translations.projectInfoUrgencyButton2Label },
        { value: 'standard', label: translations.projectInfoUrgencyButton3Label },
        { value: 'plenty', label: translations.projectInfoUrgencyButton4Label },
        { value: 'none', label: translations.projectInfoUrgencyButton5Label }
    ];
    const handleFileUpload = ({ target }) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            const fileList = values.uploadedfiles;
            fileList.push(target.files[0].name);
            handleFileUpdate("uploadedfiles", fileList);
        };
    };

    const handleFileDelete = (target, values) => {
        const changedFiles = values.uploadedfiles.filter(name => name !== target);
        handleFileUpdate("uploadedfiles",changedFiles);
    };

    let buttonFocus;

    const submit = (values) => {
        if (buttonFocus === "prev") {
            prevStep(values);
        } else {
            handleSubmit(values)
        }
    }
    return (
        <div className={`${classes.piformpanel2} ${classes.forminfospacing} `}>
            <div
                className={classes.formborder}
            >
                <p className={classes.formTitle}>{translations.projectInfoTitle}</p>
            </div>

            <Formik
                enableReinitialize
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    submit(values);
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <div>
                            <div className={classes.areaForm}>
                                <div className={classes.pisummarypanelposition}>
                                    <SummaryPanel objective={objective} indoors={indoors} />
                                </div>
                                <div className={classes.piradiobutton}>
                                    <div
                                        className={classes.button1}
                                    >
                                        <ButtonGroup style={{ fontSize: '0.6rem' }}
                                            title={translations.projectUrgencyTitle}
                                            selected={values.urgency}
                                            buttonItems={urgencyButtonItems}
                                            onChange={handleChange}
                                            name='urgency'
                                            display="flex"
                                        ></ButtonGroup>
                                    </div>

                                </div>
                                <div className={classes.projectinfopanel}>
                                    <div style={{ marginLeft: '2rem' }}>
                                        {translations.projectInfoFileInstructions}
                                    </div>
                                    <div className={classes.projectinfotext}>
                                        <div className={classes.projectinfotext2}>
                                            {translations.projectInfoFileExtraInfo}
                                        </div>
                                        <div style={{ marginLeft: '2rem' }}>
                                            <input style={{ display: 'none' }}
                                                accept="*"
                                                className={classes.input}
                                                onChange={handleFileUpload}
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button className={classes.piuploadbutton} variant="contained" color="primary" component="span">
                                                    {translations.projectInfoFileButtonText}
                                                </Button>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={classes.pilistpanel}>
                                        <div style={{ maxHeight: '11rem', paddingRight: '3rem', overflowX: 'hidden', overflowY: 'auto' }}>
                                            {values.uploadedfiles.map(item => (
                                                <UpLoadField key={item} file={item} handler={handleFileDelete} values={values} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.pirequirements}>
                                    <div className={classes.piheader}>
                                        {translations.projectInfoRequirementsInstructions}
                                    </div>
                                    <Field className={classes.pitextarea}
                                        data-test='projectrequirements'
                                        label={translations.projectInfoRequirementsTitle}
                                        name='requirements'
                                        value=''
                                        placeholder={translations.projectInfoRequirementsPlaceholder}
                                        multiline={true}
                                        rows={7}
                                        rowsMax={7}
                                        component={MyTextField}
                                    />
                                </div>
                            </div>
                            <div className={classes.pifieldpanel}>
                                <Field className={classes.pifield} style={{ marginLeft: '2rem', marginRight: '2rem' }}
                                    data-test='projectbudget'
                                    label={translations.projectInfoProjectBudget}
                                    name='budget'
                                    value={values.budget}
                                    component={MyTextField}
                                />
                                <Field className={classes.pifield}
                                    data-test='projectname'
                                    label={translations.projectInfoProjectName}
                                    name='name'
                                    value={values.name}
                                    component={MyTextField}
                                />
                            </div>
                            <div className={classes.pibuttons}>
                                <FormButtonPanel style={{ marginTop: '1rem' }}
                                    isSubmitting={isSubmitting}
                                    prevStep={prevStep}
                                    button3text={translations.continueButtonText}
                                ></FormButtonPanel>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default FormProjectInfo;