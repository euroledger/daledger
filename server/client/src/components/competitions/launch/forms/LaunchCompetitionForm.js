import React, { useContext, useState } from 'react';
import ProfileContext from '../../../../ProfileContext';
import TableData from './data/FunctionalAreaTableData';
import FormProjectDefinition from './functionalareas/FormProjectDefinition';
import FormFunctionalAreas from './functionalareas/FormFunctionalAreas';
import FormProjectInfo from './FormProjectInfo';
import FormProjectStyle from './FormProjectStyle';
import FormProjectSummary from './FormProjectSummary';

const LaunchCompetitionForm = () => {
    const { translations } = useContext(ProfileContext);

    const { rows, rowsRight, outdoorRows } = TableData(translations);

    const initialState = {
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

    const handleSubmit = (values, setSubmitting, resetForm) => {
        // values.loading = true;

        setValues(prevState => {
            return { ...prevState, ...values };
        });

        if (form.step < 5) {
            nextStep();
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
                <FormProjectDefinition
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    setCountry={setCountry}
                    values={form}
                ></FormProjectDefinition>
            );
        case 2:
            return (
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
            );
        case 3:
            return (
                <FormProjectInfo
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    values={form}
                    setFieldValue={setFieldValue}
                    handleFileUpdate={handleFileUpdate}
                ></FormProjectInfo>
            );
        case 4:
            return <FormProjectStyle
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                prevStep={prevStep}
                values={form}
                setFieldValue={setFieldValue}
                handleFileUpdate={handleFileUpdate}
            ></FormProjectStyle>
        case 5:
            return <FormProjectSummary
                prevStep={prevStep}
                values={form}
                setFieldValue={setFieldValue}
            ></FormProjectSummary>
        case 6:
            return <h1>Success</h1>;
        default: {
            console.log("Error: unexpected step: ", step);
        }
    }
};

export default LaunchCompetitionForm;
