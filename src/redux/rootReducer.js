import { combineReducers } from 'redux';
import userDataReducer from './Reducers/UserDataReducer';
import userLoginReducer from './Reducers/UserLoginReducer';
import creatorDetailsReducer from './Reducers/CreatorDetailsReducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
  userLogin: userLoginReducer,
  creatorDetails: creatorDetailsReducer,
});

export default rootReducer;
