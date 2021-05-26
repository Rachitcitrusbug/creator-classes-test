import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PaypalLogo from '../../assets/images/icons/paypal.png';

function CardForm() {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardNumberErr, setCardNumberErr] = useState({});
  const [expiryErr, setExpiryErr] = useState({});
  const [cvcErr, setCvcErr] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      setCardNumber('');
      setExpiry('');
      setCvc('');

      if (!stripe || !elements) {
        return;
      }

      const cardNumberElement = elements.getElement(CardNumberElement);

      const result = await stripe.createToken(cardNumberElement);

      if (result.error) {
        console.log('[ERROR]', result.error);
      } else {
        console.log('[CARD-TOKEN]', result.token);
        history.push('/success');
      }
    }
  };

  const formValidation = () => {
    const numberErr = {};
    const exErr = {};
    const cErr = {};
    let isValid = true;

    if (cardNumber == false) {
      numberErr.cardNumberRequired = 'Enter your card number properly!';
      isValid = false;
    }

    if (expiry == false) {
      exErr.expiryRequired = 'Enter your card expiry properly!';
      isValid = false;
    }

    if (cvc == false) {
      cErr.cvcRequired = 'Enter your card cvc properly!';
      isValid = false;
    }

    setCardNumberErr(numberErr);
    setExpiryErr(exErr);
    setCvcErr(cErr);
    return isValid;
  };

  return (
    <>
      <div className="main-middle-area user-main-middle-area main-bg-color">
        <div className="header-footer-with-min-height02">
          <div className="pattern-inner-div pattern-upricing-inner-div mxh-100">
            <section
              className="general-payment-section payment-details-section"
              id="payment-details-section"
            >
              <div className="container container-970">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="general-payment-div">
                      <div className="container-general-center">
                        <div className="heading-div">
                          <div className="heading-inner-div">
                            <h1>Payment Details</h1>
                          </div>
                        </div>

                        <div className="general-payment-root">
                          <div className="general-top">
                            <div className="general-row">
                              <div className="form-general-root">
                                <div className="row mlr-12">
                                  <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                    <div className="form-group">
                                      <label className="label-text">Your name</label>
                                      <div className="form-group-control">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder=""
                                        />
                                      </div>
                                      <div className="invalid-feedback">This field is required</div>
                                    </div>
                                  </div>

                                  <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                    <div className="form-group credit-card-form-group">
                                      <label className="label-text">Card number</label>
                                      <div className="form-group-control">
                                        <CardNumberElement
                                          className="number credit-card-number form-control"
                                          id="card-number"
                                          name="number"
                                          placeholder="XXXX XXXX XXXX XXXX"
                                          data-mask="0000 0000 0000 0000"
                                          autoComplete="off"
                                          maxLength="16"
                                          value={cardNumber}
                                          onChange={(e) => {
                                            setCardNumber(e.complete);
                                          }}
                                          options={{
                                            style: {
                                              base: {
                                                fontSize: '20px',
                                                color: '#ffffff',
                                                '::placeholder': {
                                                  color: '#4e5278',
                                                },
                                              },
                                              invalid: {
                                                color: 'red',
                                              },
                                            },
                                          }}
                                        />

                                        <div className="select-card-dropdown-div">
                                          <div className="dropdown-select-card" id="myDropdown">
                                            <select id="demo-htmlselect">
                                              <option
                                                value="0"
                                                selected="selected"
                                                data-imagesrc="assets/images/icons/card/master-card.svg"
                                                data-description=""
                                              >
                                                {' '}
                                                &nbsp;{' '}
                                              </option>
                                              <option
                                                value="1"
                                                data-imagesrc="assets/images/icons/card/Visa-light.svg"
                                                data-description=""
                                              ></option>
                                              <option
                                                value="2"
                                                data-imagesrc="assets/images/icons/card/Cirrus-light.svg"
                                                data-description=""
                                              ></option>
                                              <option
                                                value="3"
                                                data-imagesrc="assets/images/icons/card/Maestro-light.svg"
                                                data-description=""
                                              ></option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      {Object.keys(cardNumberErr).map((key, index) => {
                                        return (
                                          <span key={index} style={{ color: 'red' }}>
                                            {cardNumberErr[key]}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                    <div className="form-group">
                                      <label className="label-text">Expiry Date</label>
                                      <div className="form-group-control">
                                        <CardExpiryElement
                                          className="number month-number form-control"
                                          id="month-number"
                                          name="number"
                                          data-mask="00/00"
                                          autoComplete="off"
                                          maxLength="5"
                                          value={expiry}
                                          onChange={(e) => {
                                            setExpiry(e.complete);
                                          }}
                                          options={{
                                            style: {
                                              base: {
                                                fontSize: '20px',
                                                color: '#ffffff',
                                                '::placeholder': {
                                                  color: '#4e5278',
                                                },
                                              },
                                              invalid: {
                                                color: 'red',
                                              },
                                            },
                                          }}
                                        />
                                      </div>
                                      {Object.keys(expiryErr).map((key, index) => {
                                        return (
                                          <span key={index} style={{ color: 'red' }}>
                                            {expiryErr[key]}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                    <div className="form-group">
                                      <label className="label-text">CVV</label>
                                      <div className="form-group-control">
                                        <CardCvcElement
                                          className="form-control cvv-code"
                                          id="cvv"
                                          name="number"
                                          maxLength="3"
                                          data-mask="000"
                                          autoComplete="off"
                                          value={cvc}
                                          onChange={(e) => {
                                            setCvc(e.complete);
                                          }}
                                          options={{
                                            style: {
                                              base: {
                                                fontSize: '20px',
                                                color: '#ffffff',
                                                '::placeholder': {
                                                  color: '#4e5278',
                                                },
                                              },
                                              invalid: {
                                                color: 'red',
                                              },
                                            },
                                          }}
                                        />
                                      </div>
                                      {Object.keys(cvcErr).map((key, index) => {
                                        return (
                                          <span key={index} style={{ color: 'red' }}>
                                            {cvcErr[key]}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="remember-me-card"
                                        name="example1"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="remember-me-card"
                                      >
                                        Remember this card
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="general-bottom">
                            <div className="general-btn-div-row">
                              <div className="general-btn-div-left">
                                <Link to="/paypal" className="btn btn-primary-white-py mh-btn55">
                                  <img src={PaypalLogo} className="img-fluid" alt="img" />
                                </Link>
                              </div>
                              <div className="general-btn-div-right">
                                <Link
                                  to="/book-seat"
                                  className="btn btn-primary-outline btn-primary-color-02 mh-btn55 btn-black-back mr-24"
                                >
                                  <span className="text">Back</span>
                                </Link>
                                <Link
                                  onClick={handleSubmit}
                                  className="btn btn-common-primary mh-btn55 btn-book"
                                >
                                  {' '}
                                  Pay Now{' '}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardForm;
