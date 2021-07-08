import { FETCH_STUDENT } from "../actions/actionTypes";
import { DELETE_STUDENT } from "../actions/actionTypes";
// REDUCER;
const student = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    default:
      return state;
  }
};

export default student;