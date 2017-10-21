import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action);
    let returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
};

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
}
