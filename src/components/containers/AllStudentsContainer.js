import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { deleteStudentThunk } from "../../store/thunks";
import { AllStudentsView } from "../views";

class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }
  DeleteStudent = (id) => {

    this.props.deleteStudent(id);
    this.props.fetchAllStudents();
    //window.history.back()

  }

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        DeleteStudent={this.DeleteStudent}
      />
    );
  }

}
// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
    deleteStudent: state.deleteStudent
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);

