import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { useStyles } from '../containerstyle';
import { useHistory } from "react-router-dom";
import { deleteProject } from '../competitions/launch/forms/draftprojects/DeleteProject';
import { logMessage } from '../../utils/Logger';
import ProfileContext from '../../ProfileContext';

const Payments = ({ amount, projectId, disabled }) => {
    const classes = useStyles();
    const { auth } = useContext(ProfileContext);
    const getDescription = () => {
        let smallamount = amount / 100;
        smallamount = smallamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `Award (€${smallamount})`;
    }

    let history = useHistory();
        
    const handleToken = async (token) => {
        history.push("/clienthome");
        try {
            await deleteProject(projectId);
        } catch (error) {
            const msg = "Failed to delete completed competition id = " + projectId;
            logMessage(auth._id, "ERROR", msg);
            return null;
        }
    }
    return (
        <>
            <StripeCheckout className={classes.payment}
                amount={amount}
                name='Competition Payment'
                description={getDescription()}
                currency='EUR'
                shippingAddress
                billingAddress
                image="logo.png"
                // Note: enabling both zipCode checks and billing or shipping address will
                // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                zipCode
                token={token => handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button
                    size='medium'
                    // type='submit'
                    variant="outlined"
                    className={`${classes.button} ${classes.formButton} ${classes.paybutton}`}
                    disabled={disabled}

                >
                    Pay &amp; Launch
                </Button>
            </StripeCheckout>
        </>
    );
}

export default Payments;