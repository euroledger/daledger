import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { useStyles } from '../containerstyle';


const Payments = ({ amount, disabled }) => {
    const classes = useStyles();
    const getDescription = () => {
        let smallamount = amount / 100;
        smallamount = smallamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `Award (€${smallamount})`;
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
                image="logo6-en.png"
                // Note: enabling both zipCode checks and billing or shipping address will
                // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                zipCode
                token={token => console.log(token)}
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