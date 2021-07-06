import { ADD_STUDENT } from "../actions/actionTypes";

// REDUCER;
const addStudent = (state = {}, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default addStudent;