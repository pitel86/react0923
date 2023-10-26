const INITIAL_STATE = {
    numeros: []
}

const numerosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
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

export default numerosReducer;
