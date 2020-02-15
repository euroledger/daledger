import React, { useContext, useState, useEffect } from 'react';
import ProfileContext from '../../../../ProfileContext';
import TableData from './data/FunctionalAreaTableData';
import FormProjectDefinition from './functionalareas/FormProjectDefinition';
import FormFunctionalAreas from './functionalareas/FormFunctionalAreas';
import FormProjectInfo from './FormProjectInfo';
import FormProjectStyle from './FormProjectStyle';
import FormProjectSummary from './FormProjectSummary';
import { saveProject } from './draftprojects/SaveProject';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { logMessage } from '../../../../utils/Logger';
import { FOREGROUND_PANEL_COLOR } from '../../../constants';

import * as actions from '../../../../actions';
import { red } from '@material-ui/core/colors';


const LaunchCompetitionForm = (props) => {

    const { translations, auth } = useContext(ProfileContext);

    const { rows, rowsRight, outdoorRows } = TableData(translations);

    let FieldCss = withStyles({
        // @global is handled by jss-plugin-global.
        '@global': {
            '.MuiFormLabel-root': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiRadio-root': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiRadio-colorSecondary.Mui-checked': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiAutocomplete-inputRoot': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiInput-formControl': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiFormLabel-root.Mui-focused': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: `${FOREGROUND_PANEL_COLOR} !important`,
            },
            '.MuiInput-underline': {
                transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderBottom: `1px solid ${FOREGROUND_PANEL_COLOR}`
            },
            '.MuiOutlinedInput': {
                notchedOutline: {
                    borderColor: FOREGROUND_PANEL_COLOR
                },
                focused: {
                    borderColor: FOREGROUND_PANEL_COLOR
                },
            },
            '.MuiInput-underline:before': {
                borderBottom:  `2px solid transparent`
            },
            '.MuiInput-underline:hover:before': {
                borderBottom: `1px solid ${FOREGROUND_PANEL_COLOR} !important`
            },
            '.MuiInput-underline:hover:after': {
                borderBottom: `1px solid ${FOREGROUND_PANEL_COLOR} !important`
            },
            '.MuiSvgIcon-root': {
                color: red
            },
            '.MuiAutocomplete-popupIndicator': {
                color: FOREGROUND_PANEL_COLOR
            },
            '.MuiAutocomplete-clearIndicator': {
                visibility: 'visible',
                color: FOREGROUND_PANEL_COLOR
            }

        }
    })(() => null);

    let initialState =
    {
        userId: -1,
        id: '', // id of the project
        step: 1,
        space: 'residential',
        objective: 'newspace',
        indooroutdoor: 'indoor',
        entireprop: 'true',
        country: 'RO',
        loading: false,
        rows: rows,
        rowsRight: rowsRight,
        outdoorRows: outdoorRows,
        urgency: 'fast',
        name: '',
        budget: '',
        uploadedfiles: [],
        requirements: '',
        styleId: -1,
        uploadedphotos: [],
        award: '',
        translations: translations
    };

    const [form, setValues] = useState(initialState);

    const { competition } = props;

    useEffect(() => {
        if (competition) {
            setValues(prevState => {
                return { ...prevState, ...competition };
            });
        }
    }, [competition]);


    const saveDraftDetails = async (step) => {
        setValues({ ...form, userId: auth._id });
        try {
            return await saveProject(step, form, form.id, auth._id);
        } catch (error) {
            const msg = "Failed to save draft competition";
            logMessage(auth._id, "ERROR", msg);
            return null;
        }
    };


    const nextStep = () => {
        const { step } = form;
        setValues(prevState => {
            return { ...prevState, step: step + 1 };
        });
    };

    const prevStep = () => {
        const { step } = form;
        setValues(prevState => {
            return { ...prevState, step: step - 1 };
        });
    };


    const handleFileUpdate = (field, changedFiles) => {
        setValues(prevState => {
            return { ...prevState, [field]: changedFiles };
        });
    }

    const handleRowUpdate = (side, changedRows) => {
        if (side === "left") {
            setValues(prevState => {
                return { ...prevState, rows: changedRows };
            });
        } else if (side === "right") {
            setValues(prevState => {
                return { ...prevState, rowsRight: changedRows };
            });
        } else {
            setValues(prevState => {
                return { ...prevState, outdoorRows: changedRows };
            });
        }

    }
    const handleChange = (input, e) => {
        const { value } = e.target;
        setValues({ ...form, [input]: value });

        // if the indoor outdoor button selection changes reset the style back to its default 
        if (input === 'indooroutdoor') {
            setValues(prevState => {
                return { ...prevState, styleId: -1 };
            });
        }
    };


    const setFieldValue = (input, value) => {
        setValues({ ...form, [input]: value });
    }
    const setCountry = value => {
        setValues(prevState => {
            return { ...prevState, country: value == null ? '' : value.code };
        });
    };


    const save = async (step) => {
        const res = await saveDraftDetails(step);
        if (res !== null) {
            logMessage(auth._id, "INFO", "Successfully saved draft competition! project data = ", res.data);
            setValues({ ...form, id: res.id });
            nextStep();
        }
    }

    const handleSubmit = (values, setSubmitting, resetForm) => {
        // values.loading = true;

        setValues(prevState => {
            return { ...prevState, ...values };
        });

        // poke the user id into the values object before saving it
        if (form.step < 5) {
            save(form.step);
        }
        // setSubmitting(true);

        // setTimeout(() => {
        //     resetForm();
        //     setSubmitting = false;
        //     setValues({ ...form, loading: false });
        //     window.location = '/auth/google';
        // }, 3000);
    };
    const { step } = form;
    switch (step) {

        case 1:
            return (
                <>

                    {/* <MuiThemeProvider theme={theme}> */}
                    <FieldCss></FieldCss>
                    <FormProjectDefinition
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setCountry={setCountry}
                        values={form}
                        auth={auth}
                    ></FormProjectDefinition>
                    {/* </MuiThemeProvider> */}

                </>
            );
        case 2:
            return (
                <>
                    <FieldCss></FieldCss>
                    <FormFunctionalAreas
                        prevStep={prevStep}
                        rows={form.rows}
                        rowsRight={form.rowsRight}
                        columns={translations.functionalareacolumns}
                        outdoorRows={form.outdoorRows}
                        outdoorColumns={translations.functionalareacolumnsoutdoors}
                        handleRowUpdate={handleRowUpdate}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        values={form}
                        objective={form.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel}
                        indooroutdoor={form.indooroutdoor}
                    ></FormFunctionalAreas>
                </>
            );
        case 3:
            return (
                <>
                    <FieldCss></FieldCss>
                    <FormProjectInfo
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        values={form}
                        setFieldValue={setFieldValue}
                        handleFileUpdate={handleFileUpdate}
                    ></FormProjectInfo>
                </>
            );
        case 4:
            return (
                <>
                    <FieldCss></FieldCss>
                    <FormProjectStyle
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        values={form}
                        setFieldValue={setFieldValue}
                        handleFileUpdate={handleFileUpdate}
                    ></FormProjectStyle>
                </>
            )
        case 5:
            return (
                <>
                    <FieldCss></FieldCss>
                    <FormProjectSummary
                        prevStep={prevStep}
                        values={form}
                        setFieldValue={setFieldValue}
                    ></FormProjectSummary>
                </>)
        default: {
            console.log("Error: unexpected step: ", step);
        }
    }
};

// export default LaunchCompetitionForm;

function mapStateToProps({ competition }) {
    return { competition };
}

export default connect(mapStateToProps, actions)(LaunchCompetitionForm);
