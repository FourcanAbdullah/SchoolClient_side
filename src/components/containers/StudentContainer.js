import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { fetchCampusThunk } from "../../store/thunks";
import { deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { editStudentThunk } from "../../store/thunks";

class StudentContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);
    //this.props.fetchCampus(this.props.match.params.campusId)
  }
  DeleteStudent = () => {

    this.props.deleteStudent(this.props.match.params.id);
    window.history.back()

  }

  EditStudent = () => {


  }
  render() {
    return (
      <StudentView
        student={this.props.student}
        DeleteStudent={this.DeleteStudent}
        EditStudent={this.EditStudent}
      //campus={this.props.campus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    // campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    editStudent: student => dispatch(editStudentThunk(student)),
    //fetchCampus: (campusId) => dispatch(fetchCampusThunk(campusId))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
