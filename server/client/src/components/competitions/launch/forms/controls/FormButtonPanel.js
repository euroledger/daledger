import React, { useContext } from 'react';
import { useStyles } from '../../../../containerstyle';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../../../ProfileContext';
import Payment from '../../../../payments';

const FormButtonPanel = ({ isSubmitting, prevStep, button3text, payment, amount, projectId, disabled }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const getThirdButton = () => {
        if (payment) {
            return <Payment amount={amount} projectId={projectId} disabled={disabled}></Payment>
        } else return (
            <Button
                size='medium'
                type='submit'
                variant="outlined"
                className={`${classes.button} ${classes.formButton}`}
                style={{
                    width: '18rem',
                    marginBottom: '1rem',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                }}
                data-test="continueButton"
            >
                {button3text}
            </Button>);
    }
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
                    width: '16rem',
                    marginBottom: '1rem'
                }}
                disabled={isSubmitting}
                href='/clienthome'
            >
                {translations.homeButtonText}
            </Button>

            {getThirdButton()}
        </div>
    );
};

export default FormButtonPanel;
