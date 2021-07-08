import { EDIT_CAMPUS } from "../actions/actionTypes";

// REDUCER;
const editCampus = (state = {}, action) => {
    switch (action.type) {
        case EDIT_CAMPUS:
            return state.map(campus => {
                return (
                    campus.id === action.payload.id ? action.payload : campus
                );
            });
        default:
            return state;
    }
};

export default editCampus;