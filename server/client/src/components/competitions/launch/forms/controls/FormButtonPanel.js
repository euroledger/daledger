import React, { useContext } from 'react';
import { useStyles } from '../../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../../ProfileContext';

const FormButtonPanel = ({ isSubmitting, prevStep}) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);
    // const prevSubmit = () => {
    //     if (setFocus) {
    //         setFocus("prev")
    //     }

    // }
    // const nextSubmit = () => {
    //     if (setFocus) {
    //         setFocus("next")
    //     }
    // }

    // const getPrevButton = () => {
    //     if (allButtonsSubmit) {
    //         return (
    //             <Button
    //                 size='medium'
    //                 onClick={prevStep}
    //                 // onFocus={prevSubmit}
    //                 type='button'
    //                 className={`${classes.button} ${classes.formButton}`}
    //                 style={{
    //                     width: '12rem',
    //                     marginBottom: '1rem'
    //                 }}
    //                 disabled={isSubmitting}
    //             >
    //                 {translations.prevButtonText}
    //             </Button>
    //         )
    //     } else {
    //         return (
    //             <Button
    //                 size='medium'
    //                 onClick={prevStep}
    //                 type='button'
    //                 className={`${classes.button} ${classes.formButton}`}
    //                 style={{
    //                     width: '12rem',
    //                     marginBottom: '1rem'
    //                 }}
    //                 disabled={isSubmitting}
    //             >
    //                 {translations.prevButtonText}
    //             </Button>
    //         )
    //     }
    // }

    return (
        <div className={classes.fabuttons} >
             <Button
                    size='medium'
                    onClick={prevStep}
                    type='button'
                    className={`${classes.button} ${classes.formButton}`}
                    style={{
                        width: '12rem',
                        marginBottom: '1rem'
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
                }}
                disabled={isSubmitting}
            >
                {translations.homeButtonText}
            </Button>
            <Button
                size='medium'
                type='submit'
                variant="outlined"
                // onFocus={nextSubmit}
                className={`${classes.button} ${classes.formButton}`}
                style={{
                    width: '12rem',
                    marginBottom: '1rem',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                }}
            >
                {translations.continueButtonText}
            </Button>
        </div>
    );
};

export default FormButtonPanel;
