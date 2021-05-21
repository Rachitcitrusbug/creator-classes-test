import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducer';

const logger = createLogger();
const Store = createStore(rootReducer, applyMiddleware(logger));

export default Store;
