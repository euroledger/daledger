import React, { useContext } from 'react';
import { useStyles } from '../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../ProfileContext';
import { Formik, Form } from 'formik';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import FormButtonPanel from './controls/FormButtonPanel';
import SummaryPanel from './SummaryPanel';
import StyleData from './data/ProjectStyleData';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { DeviceHelper } from '../../../../utils';

// input imports
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';
// card imports
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardMedia,
    Popover
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core';


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

const FormProjectStyle = ({
    handleSubmit,
    prevStep,
    values,
    handleFileUpdate,
    setFieldValue
}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const theme = createMuiTheme();

    theme.typography.subtitle1 = {
        fontSize: '0.7rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.8rem',
        },
    };
    const [open, setOpen] = React.useState(false);
    const [cardActive, setCardActive] = React.useState(values.styleId);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popId, setPopId] = React.useState(-1);

    const handleClose = () => {
        setAnchorEl(null);
        setPopId(-1);
    };

    const handleClick = (i, event) => {
        setCardActive(i);
        setPopId(i);
        setAnchorEl(event.currentTarget);
        setFieldValue("styleId", i);
    };

    const objective = values.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel;
    const indoors = values.indooroutdoor === 'indoor';

    const handleFileUpload = ({ target }) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            const fileList = values.uploadedphotos;
            fileList.push(target.files[0].name);
            handleFileUpdate("uploadedphotos", fileList);
        };
    };

    const handleFileDelete = (target, values) => {
        const changedFiles = values.uploadedphotos.filter(name => name !== target);
        handleFileUpdate("uploadedphotos",changedFiles);
    };

    const submit = (values) => {
        if (values.styleId === -1) {
            setOpen(true);
            return;
        } else {
            handleSubmit(values);
        }
    }

    const { data } = StyleData(indoors, translations);
    const getTitle = () => {
        return values.styleId >= 0 ? data[values.styleId].title : '';
    }

    const isLaptop = () => {
        return DeviceHelper();
    };

    const getOrigin = () => {
        return isLaptop() ? (
            {}
        ) : { horizontal: 800, vertical: 250 }
    }
    let PopoverCss = withStyles({
        // @global is handled by jss-plugin-global.
        '@global': {
            '.MuiPopover-paper': {
                borderRadius: '2rem'
            },
        }
    })(() => null);

    return (
        <div className={`${classes.piformpanel2} ${classes.psformpanel2} ${classes.forminfospacing} `}>
            <div
                className={classes.formborder}
            >
                <p className={classes.formTitle}>{translations.projectStyleTitle}</p>
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
                        <div>
                            <div className={classes.areaForm}>
                                <div className={classes.pisummarypanelposition}>
                                    <SummaryPanel name={values.name} objective={objective} indoors={indoors} />
                                </div>
                                <div className={classes.psroot}>
                                    <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                    >
                                        {data.map(elem => (
                                            <Grid item xs={12} sm={6} md={3} data-test={`card-${data.indexOf(elem)}`} key={data.indexOf(elem)}>

                                                <Card className={data.indexOf(elem) === cardActive ? classes.pscard : classes.pscardnoborder} onClick={(e) => handleClick(data.indexOf(elem), e)}>
                                                    <CardMedia
                                                        style={{ height: '140px' }}
                                                        image={elem.image}
                                                    >

                                                    </CardMedia>
                                                    <CardContent>
                                                        <ThemeProvider theme={theme}>
                                                            <Typography variant="subtitle1">
                                                                {elem.title}
                                                            </Typography>
                                                        </ThemeProvider>
                                                    </CardContent>
                                                </Card>
                                                <PopoverCss></PopoverCss>
                                                <Popover
                                                    open={data.indexOf(elem) === popId}
                                                    anchorEl={anchorEl}
                                                    className={classes.pspopover}
                                                    onClose={handleClose}
                                                    transformOrigin={getOrigin()}
                                                    style={{borderRadius: '50px'}}
                                                >
                                                    <Typography style={{
                                                        background: 'black', color: 'white',
                                                        opacity: '0.6',
                                                        textAlign: 'center',
                                                        paddingLeft: '1rem',
                                                        paddingRight: '1rem',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                    }}
                                                        className={classes.pstypography}>
                                                        {elem.title}<br></br>
                                                        {elem.description}</Typography>
                                                </Popover>
                                            </Grid>
                                        ))}
                                    </Grid>
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
                                            Please select a style
                                        </Alert>
                                    </Collapse>
                                </div>

                                <div className={classes.pspanel}>
                                    <div style={{ marginLeft: '2rem' }}>
                                        {translations.projectStylePhotos}
                                    </div>
                                    <div className={classes.projectinfotext}>
                                        <div style={{ marginLeft: '2rem' }}>
                                            <input style={{ display: 'none' }}
                                                className={classes.input}
                                                accept="image/*"
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
                                    <div className={classes.pslistpanel}>
                                        <div style={{ maxHeight: '11rem', paddingRight: '3rem', overflowX: 'hidden', overflowY: 'auto' }}>
                                            {values.uploadedphotos.map(item => (
                                                <UpLoadField key={item} file={item} handler={handleFileDelete} values={values} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        {translations.projectStyleSelected}: {getTitle()}
                                    </div>
                                </div>

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
        </div >
    );
};


export default FormProjectStyle;