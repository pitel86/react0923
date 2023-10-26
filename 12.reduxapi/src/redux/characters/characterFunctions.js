import axios from "axios"

export const getCharacters = () => async (dispatch) => {
    dispatch({type: 'gettingCharacters'})
    try {
        const {data} = await axios("https://rickandmortyapi.com/api/character")
        console.log(data)
        dispatch({type: 'getCharacters', payload: data.results})
    } catch (error) {
        dispatch({type: "getCharactersError", payload: error})
    }

    
}

export const postCharacter = () => async (dispatch) => {
    try {
        await axios.post("", {})
    } catch (error) {
        
    }
}