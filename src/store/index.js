import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
 
import rootReducer from './reducers/index';



//const persistedState = loadFromLocalStorage()
//const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store =  createStore(
    rootReducer,
    //persistedState,
    composeEnhancers(applyMiddleware(thunk)),
);



export default store;