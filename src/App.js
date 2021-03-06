import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
// import './assets/css/dev.style.css';
import './assets/css/all.min.css';
import './assets/css/feather.min.css';
// import "./assets/css/owl.carousel.min.css";
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/select2.min.css';
import './assets/css/select-custom.css';
import './assets/css/select2-custom.css';
import './assets/css/modal-style.css';
import './assets/css/owl-slider-style.css';
import './assets/css/home-style.css';
import './assets/css/style.css';
import './assets/css/custom.css';
import './assets/css/custom-forms-style.css';
import './assets/css/user/general-card-style.css';
import './assets/css/auth-style.css';
import './assets/fonts/gilroy/gilroy-style.css';
import './assets/fonts/moderat/moderat-style.css';
import './assets/css/user/user-class-details-style.css';
import './assets/css/booking-modal-style.css';
import './assets/css/tab-style.css';
import './assets/css/creators-details-style.css';
import './assets/css/user/user-home-style.css';
import './assets/css/search-banner-style.css';
import './assets/css/user/user-upcomming-live-streams-style.css';
import './assets/css/user/book-a-seat-style.css';
import Store from './redux/Store/Store';

const Main = lazy(() => import('./components/Main'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const ClassDetails = lazy(() => import('./components/User/ClassDetails'));
const CreatorDetails = lazy(() => import('./components/User/CreatorDetails'));
const UserHome = lazy(() => import('./components/User/UserHome'));
const Card = lazy(() => import('./components/Payment/CardPayment'));
const Paypal = lazy(() => import('./components/Payment/PaypalPayment'));
const PaymentSuccessfull = lazy(() => import('./components/Payment/PaymentSuccessfull'));
const LiveStreamDetails = lazy(() => import('./components/LiveStream/LiveStreamDetails'));
const BookASeat = lazy(() => import('./components/LiveStream/BookASeat'));

const App = () => (
  <Provider store={Store}>
    <Router>
      <Suspense fallback="Loading...">
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/class" component={ClassDetails} />
        <Route exact path="/creator" component={CreatorDetails} />
        <Route exact path="/user-home" component={UserHome} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/paypal" component={Paypal} />
        <Route exact path="/success" component={PaymentSuccessfull} />
        <Route exact path="/live-stream" component={LiveStreamDetails} />
        <Route exact path="/book-seat" component={BookASeat} />
      </Suspense>
    </Router>
  </Provider>
);

export default App;
