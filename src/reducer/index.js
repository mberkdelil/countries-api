const initialState = {
    countries: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state, countries: action.payload
            }

        case "SEARCH":
            return {
                ...state, countries: state.countries.filter(country => {
                    return country.name.common.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                }).sort((a, b) => {
                    return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
                })
            }

        default: return state;
    }
};