import React, { useContext } from 'react';
import ProfileContext from '../../../../../ProfileContext';
import { useStyles } from '../../../../containerstyle';
import countriesEN from '../data/countriesEN';
import countriesRO from '../data/countriesRO';
import StyleData from '../data/ProjectStyleData';
import { withStyles } from '@material-ui/core';


const SummaryRow = ({ label, value, big, classes }) => {
    const getStyle = () => {
        return big ? { marginTop: '0.2rem', display: 'flex', maxHeight: '3.8rem' } :
            { display: 'flex', maxHeight: '1.3rem' };
    };
    const getInnerStyle = () => {
        return big ? classes.biginnerstyle :
            classes.smallinnerstyle
    };
    return (
        <div style={getStyle()} >
            <div className={classes.pslabelstyle}>
                {label}
            </div>
            <div className={getInnerStyle()} >
                {value}
            </div>
        </div>
    )
}

const SummaryPanel = ({ values, objective, indoors, awardField }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    let FieldCss = withStyles({
        // @global is handled by jss-plugin-global.
        '@global': {
            '.MuiFormLabel-root': {
                color: 'white'
            },
            '.MuiFormLabel-root.Mui-focused': {
                color: 'white'
            },
            '.MuiInput-underline': {
                transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderBottom: '1px solid white',
            },
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: "white !important",
            },
            '.MuiOutlinedInput': {
                notchedOutline: {
                    borderColor: 'white'
                },
                focused: {
                    borderColor: 'white'
                },
            },
            '.MuiInput-underline:before': {
                borderBottom: '2px solid transparent'
            },
            '.MuiInput-underline:hover:before': {
                borderBottom: '1px solid white !important'
            },
            '.MuiInput-underline:after': {
                borderBottom: '1px solid white'
            },
            // '.MuiFormControl-root': {
            //     marginLeft: '1rem'
            // }
        }
    })(() => null);

    const { name, country } = values;
    const indooroutdoorLabel = indoors ? translations.functionalAreaPanelLabel3indoors : translations.functionalAreaPanelLabel3outdoors;

    let countries = countriesEN;
    if (translations.language === "ro") {
        countries = countriesRO;
    }

    const getCountryByCode = code => {
        const country = countries.find(obj => {
            return obj.code === code;
        });
        return country.label;
    };

    const getScopeTitle = () => {
        return <p>{translations.projectSummaryScope} </p>
    }

    const getCountryTitle = () => {
        return <p>{translations.projectSummaryCountry} </p>
    }

    const getDeadlineTitle = () => {
        return <p>{translations.projectSummaryDeadline} </p>;
    }

    const getBudgetTitle = () => {
        return <p>{translations.projectSummaryBudget} </p>
    }

    const getProjectStyleTitle = () => {
        return <p>{translations.projectSummaryStyle}</p>
    }
    const getSpecialRequirementsTitle = () => {
        return <p>{translations.projectSummarySpecialRequirements} </p>
    }

    const getUploadFilesTitle = () => {
        return <p className={classes.psupload}>{translations.projectSummaryUploadFiles} </p>
    }
    const getAwardTitle = () => {
        return <p>{translations.projectSummaryAIAward}</p>
    }
    const getMinAwardTitle = () => {
        return <p>{translations.projectSummaryMinAward}</p>
    }
    // ---
    const getName = () => {
        if (name) {
            return <p>{name}</p>;
        }
        return <></>;
    }

    const getScope = () => {
        return <p>{translations.functionalAreaPanelLabel1}, {objective}, {indooroutdoorLabel}</p>
    }

    const getCountry = () => {
        return <p>{getCountryByCode(country)}</p>
    }

    const getDeadline = () => {
        switch (values.urgency) {
            case 'urgent':
                return <p>{translations.projectSummaryDate1}</p>;
            case 'fast':
                return <p>{translations.projectSummaryDate2}</p>;
            case 'standard':
                return <p>{translations.projectSummaryDate3}</p>;
            case 'plenty':
                return <p>{translations.projectSummaryDate4}</p>;
            default:
                return <p>{translations.projectSummaryDate5}</p>
        }
    }

    const getBudget = () => {
        if (values.budget) {
            return <p>{values.budget} euros</p>
        } else {
            return <p>{translations.projectSummaryNoBudget}</p>
        }
    }
    const { data } = StyleData(indoors, translations);

    const getProjectStyle = () => {
        return <p>{data[values.styleId].title}</p>
    }

    const getSpecialRequirements = () => {
        return <div className={classes.psreq}>
            <p style={{ lineHeight: '130%' }}>{values.requirements ? values.requirements : 'None'}</p>
        </div>
    }

    const getUploadFiles = () => {
        return (
            <div className={classes.psuploadfiles}>
                {values.uploadedfiles.length === 0 ?
                    <p>{translations.projectSummaryNone}</p> :
                    <ul className={classes.psfilelist}>{values.uploadedfiles.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                    </ul>}
            </div>
        )
    }
    const getAward = () => {
        return <p>100 euros</p>
    }

    const getMinAward = () => {
        return <p>80 euros</p>
    }
   
    return (
        <div
            className={classes.largeSummaryPanel}
        >
            <div style={{ marginTop: '1rem' }} className={classes.summaryPanelTitle}>
                {getName()}
            </div>
            <div className={classes.psouter}>
                <div
                    className={classes.summaryPanelBody}
                    style={{ textAlign: 'left', maxWidth: '40rem' }}
                >
                    <div>
                        {/* <SummaryRow label={getNameTitle()} value={getName()} big={false}></SummaryRow> */}
                        <SummaryRow label={getScopeTitle()} value={getScope()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getCountryTitle()} value={getCountry()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getDeadlineTitle()} value={getDeadline()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getBudgetTitle()} value={getBudget()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getProjectStyleTitle()} value={getProjectStyle()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getSpecialRequirementsTitle()} value={getSpecialRequirements()} big={true} classes={classes}></SummaryRow>
                        <SummaryRow label={getUploadFilesTitle()} value={getUploadFiles()} big={true} classes={classes}></SummaryRow>
                        <SummaryRow label={getAwardTitle()} value={getAward()} big={false} classes={classes}></SummaryRow>
                        <SummaryRow label={getMinAwardTitle()} value={getMinAward()} big={false} classes={classes}></SummaryRow>
                        <FieldCss></FieldCss>
                        {awardField}
                    </div>
                </div>
                <div className={classes.psinfopanelposition}>
                    <div className={classes.psinfopanel} >
                        <p>{translations.projectSummaryAwardText1}</p><p>{translations.projectSummaryAwardText2}</p>
                    </div>
                    <div className={classes.psinfopanel} style={{ marginTop: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
                        {translations.projectSummaryLaunchInfo}
                    </div>
                </div>


            </div>

        </div>

    )
}

export default SummaryPanel;
