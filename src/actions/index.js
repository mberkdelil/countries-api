import axios from "axios";

export const getCountries = () => dispatch => {
    axios.get("https://restcountries.com/v3.1/all")
        .then(response => {
            dispatch({ type: "GET_COUNTRIES", payload: response.data })
        })
        .catch(error => console.log(error))
}

export const searchCountries = search => {
    return { type: "SEARCH", payload: search }
}