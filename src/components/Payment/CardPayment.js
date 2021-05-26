import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';
import CardForm from './CardForm';
import { STRIPE_CONFIG } from '../../constants/stripeApiKey';

const stripePromise = loadStripe(STRIPE_CONFIG.API_KEY);

function CardPayment() {
  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        <UserHeader />
        <Elements stripe={stripePromise}>
          <CardForm />
        </Elements>
        <UserFooter />
      </div>
    </>
  );
}

export default CardPayment;
