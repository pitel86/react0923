import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import  { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const INITIAL_STATE = {
    counter: 0,
    texto: "pepito",
    numeros: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "Add": 
            return {...state, counter: action.payload}
        case "Subs": 
            return {...state, counter: action.payload}
        case "Reset": 
            return {...state, counter: action.payload}
        case "changeName": 
            return {...state, texto: action.payload}
        case "addNumber":
            return {...state, numeros: [...state.numeros, action.payload] }        
        case "removeNumber":
            const numeros = [...state.numeros]
            const filteredNumeros = numeros.filter((numero) => numero !== action.payload)
            return {...state, numeros: [...filteredNumeros] }
        default: 
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;