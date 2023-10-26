import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import  { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import charactersReducer from './characters/characterReducer';
import locationsReducer from './locations/locationsReducer';

const reducer = combineReducers({
    characters: charactersReducer,
    locations: locationsReducer
})

const store = createStore( reducer , composeWithDevTools(applyMiddleware(thunk)));

export default store;