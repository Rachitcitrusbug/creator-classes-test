import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import userDataReducer from '../Reducers/UserDataReducer';

const logger = createLogger();
const authStore = createStore(userDataReducer, applyMiddleware(logger));

export default authStore;
