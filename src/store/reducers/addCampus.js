import { ADD_CAMPUS } from "../actions/actionTypes";

// REDUCER;
const addCampus = (state = {}, action) => {
    switch (action.type) {
        case ADD_CAMPUS:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default addCampus;