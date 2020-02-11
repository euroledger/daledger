import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { useStyles } from '../containerstyle';

const Payments = ({ amount }) => {
    const classes = useStyles();
    return <StripeCheckout style={{width: '40rem'}}
        amount={amount}
        name='Competition Payment'
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
            
        >
            Pay &amp; Launch
        </Button>
    </StripeCheckout>
}

export default Payments;