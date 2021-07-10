import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchStudent } from "../../store/actions/actionCreators";
import { fetchCampusThunk, editCampusThunk, fetchAllStudentsThunk,  fetchStudentThunk, editStudentThunk} from "../../store/thunks";

import { CampusView } from "../views";
import { allStudents } from "../../store/reducers";


class CampusContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.student.firstname,
      lastName: this.props.student.lastname,
      Email: this.props.student.email,
      image: this.props.student.imageUrl,
      gpa: this.props.student.gpa,
      campusId: this.props.match.params.id,
      value: {},
      studentId: 0
    }
    this.nullify= this.nullify.bind(this)
    //added
    this.adding = this.adding.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =  this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }
  
  EditCampus = () => {
    this.props.editCampus(this.props.match.params.id);
    window.history.back()
  }

  nullify(student) {
    console.log(student)  
    // this.setState ({ 
    //   campusId: null
    // })
    let addedData = {
      id: student.id,
      firstName: student.firstname,
      lastName: student.lastname,
      Email: student.email,
      image: student.imageUrl,
      gpa: student.gpa,
      campusId: null,
  }
  console.log(addedData)
  this.props.editStudent(addedData)
  window.history.go(-1)
  }

  //added
  async adding() {
    //student.preventDefault()
    const student = await this.handleSubmit()
    console.log(student)  
    // this.setState ({ 
    //   campusId: null
    // })
    let addedData = {
      id: student.id,
      firstName: student.firstname,
      lastName: student.lastname,
      Email: student.email,
      image: student.imageUrl,
      gpa: student.gpa,
      campusId: this.props.match.params.id,
  }
  console.log(addedData)
  this.props.editStudent(addedData)
  //window.history.go(-1)
  }

  handleChange(event) {
    this.setState({
      studentId: event.target.value
    })
    console.log(event.target.value)
    console.log(this.state.studentId)
  }

  async handleSubmit(event){
    event.preventDefault();
    //console.log(this.state.studentId)
    let student = this.props.fetchStudent(this.state.studentId)
   // console.log(student)
    //this.adding(student)
    return student
  }

  render() {
    //console.log(this.props.campus)
    return (
      <CampusView 
        campus={this.props.campus}
        EditCampus={this.EditCampus}
        nullify={this.nullify}
        adding= {this.adding}
        allStudents= {this.props.allStudents}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
   // NullifyCampus: state.NullifyCampus
    nullify: state.nullify,
    student: state.student, 
    allStudents: state.allStudents
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: campus => dispatch(editCampusThunk(campus)),
    editStudent: student => dispatch(editStudentThunk(student)),
    fetchAllStudents:() => dispatch(fetchAllStudentsThunk()),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id))
  };
};

// Type check props;
CampusView.propTypes = {
  allStudents: PropTypes.array.isRequired,
  // fetchAllStudents: PropTypes.func.isRequired,
  // editCampus: PropTypes.func.isRequired,
  // editStudent: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(CampusContainer);