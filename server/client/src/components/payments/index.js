import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { useStyles } from '../containerstyle';

const Payments = ({ amount }) => {
    const classes = useStyles();
    return <StripeCheckout style={{width: '40rem'}}
        amount={500}
        name='Competition Payment'
        currency='EUR'
        // locale="de"
        // panelLabel="Pay"
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
            className={`${classes.button} ${classes.formButton}`}
            style={{
                width: '12rem',
                marginBottom: '1rem',
                marginRight: '10rem',
                marginLeft: '6rem',
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: '2px',
            }}
        >
            Pay the Dude
        </Button>
    </StripeCheckout>
}

export default Payments;