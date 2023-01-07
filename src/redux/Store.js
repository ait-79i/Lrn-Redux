import { createStore ,applyMiddleware} from 'redux';
// import CounterReducer from './reducers/CounterReducer';
import reduxThunk from 'redux-thunk'
import  Reducers  from "./reducers/master";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const Store = createStore()

// const Store = createStore(Reducers, enhancer(applyMiddleware(reduxThunk)));

export default Store;