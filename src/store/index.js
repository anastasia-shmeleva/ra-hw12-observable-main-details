import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import listReducer from '../reducers/listReducer';
import itemReducer from '../reducers/itemReducer';
import { getServicesEpic, getItemEpic } from '../epics';

const reducer = combineReducers({
  services: listReducer,
  item: itemReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
  getServicesEpic,
  getItemEpic
);
const epicMiddleware = createEpicMiddleware();
const store = createStore (reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);
export default store;