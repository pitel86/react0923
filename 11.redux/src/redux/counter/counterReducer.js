const INITIAL_STATE = {
    counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "Add": 
            return {...state, counter: action.payload}
        case "Subs": 
            return {...state, counter: action.payload}
        case "Reset": 
            return {...state, counter: action.payload}
        default: 
            return state;
    }
}

export default counterReducer;