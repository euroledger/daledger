import React, { useContext, useState } from 'react';
import ProfileContext from '../../../../ProfileContext';
import TableData from './data/FunctionalAreaTableData';
import FormProjectDefinition from './FormProjectDefinition';
import FormFunctionalAreas from './functionalareas/FormFunctionalAreas';

const LaunchCompetitionForm = () => {
    const { translations } = useContext(ProfileContext);

    const { rows, rowsRight } = TableData(translations);

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
        translations: translations
    };
    const [form, setValues] = useState(initialState);

    const nextStep = () => {
        const { step } = form;
        setValues(prevState => {
            return { ...prevState, step: step + 1 };
        });
        // console.log('in nextStep: values= ', form);
    };

    const prevStep = () => {
        const { step } = form;
        setValues(prevState => {
            return { ...prevState, step: step - 1 };
        });
    };

    const handleRowUpdate = (side, changedRows) => {
        if (side === "left") {
            setValues(prevState => {
                return { ...prevState, rows: changedRows };
            });
        } else {
            setValues(prevState => {
                return { ...prevState, rowsRight: changedRows };
            });
        }

    }
    const handleChange = (input, e) => {
        const { value } = e.target;
        setValues({ ...form, [input]: value });
    };

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
                    handleRowUpdate={handleRowUpdate}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={form}
                    objective={form.objective === 'newspace' ? translations.functionalAreaPanelLabel2newspace : translations.functionalAreaPanelLabel2remodel}
                ></FormFunctionalAreas>
            );
        case 3:
            return <h1>FormCompetitionScope1</h1>;
        case 4:
            return <h1>FormCompetitionScope2</h1>;
        case 5:
            return <h1>FormCompetitionStyle</h1>;
        case 6:
            return <h1>Confirm</h1>;
        case 7:
            return <h1>Success</h1>;
        default: {
            console.log("Error: unexpected step: ", step);
        }
    }
};

export default LaunchCompetitionForm;
