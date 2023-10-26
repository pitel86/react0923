const INITIAL_STATE = {
    texto: "pepito"
}

const textoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "changeName": 
            return {...state, texto: action.payload}
        default: 
            return state;
    }
}


export default textoReducer;