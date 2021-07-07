import { EDIT_STUDENT } from "../actions/actionTypes";

// REDUCER;
const editStudent = (state = {}, action) => {
    switch (action.type) {
        case EDIT_STUDENT:
            return state.map(student => {
                return (
                    student.id === action.payload.id ? action.payload : student
                );
            });
        default:
            return state;
    }
};

export default editStudent;