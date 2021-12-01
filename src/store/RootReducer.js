import {combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';
 const RootReducer = combineReducers(
    {
    AuthReducer
    }
    );

export default RootReducer;