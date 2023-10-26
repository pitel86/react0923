
const INITIAL_STATE = {
    characters: [],
    isLoading: false,
    error: null
}

const charactersReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case "gettingCharacters":
            return {...state, error: null, isLoading: true}
        case "getCharacters":
            return {...state, error: null, isLoading: false, characters: [...action.payload]}
        case "getCharactersError":
            return {...state, isLoading:false, error: action.payload}
        case "postingCharacters":
            return {...state, error: null, isLoading: true}
        case "postCharacters":
            return {...state, error: null, isLoading: false, characters: [...state.characters, action.payload]}
        case "postCharactersError":
                return {...state, isLoading:false, error: action.payload}
        default: return state;
    }
}

export default charactersReducer