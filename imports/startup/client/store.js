import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import newsReducer from './reducers/news';

const logger = createLogger();

const reducers = combineReducers({
  form: formReducer,
  news: newsReducer,
});

const preloadedState = {};
const middlewares = [ReduxThunk,  logger];

const Store = createStore(reducers, preloadedState, applyMiddleware(...middlewares));
export default Store;
