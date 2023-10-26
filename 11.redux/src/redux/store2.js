import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import  { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from './counter/counterReducer';
import textoReducer from './texto/textoReducer';
import numerosReducer from './numeros/numerosReducer';

const reducer = combineReducers({
    counter: counterReducer,
    texto: textoReducer,
    numeros: numerosReducer
})

const store2 = createStore( reducer , composeWithDevTools(applyMiddleware(thunk)));

export default store2;