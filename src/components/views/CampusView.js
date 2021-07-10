import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { editStudent, fetchStudent } from "../../store/actions/actionCreators";
import { fetchAllStudentsThunk, fetchStudentThunk } from "../../store/thunks";
import { react } from "@babel/types";
import { connect } from "react-redux";

const CampusView = (props) => {
  const { campus, nullify, allStudents, adding, handleChange,handleSubmit } = props;
  return (
    <div style={{margin:'auto', width: '60%', padding: '10px'}}>
        
        <img style={{height:'200px',width:'200px'}} id="target" src={campus.imageUrl} alt="Campus pic" />
        <h1>{campus.name}</h1>
        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        {!campus.students.length ?  <p>No students in this campus</p> :
      <ul>
        {campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div>
            <Link key={student.id} to={`/student/${student.id}`}>{name}</Link>
            <button onClick= {() => props.nullify(student)}>Drop </button>
            </div>
            //<li key={student.id}>{name}</li>
          );
        })}    
      </ul>
      }   
    <div>
    <form >
      <label>
        {console.log(allStudents)}
        Select Students to enroll in campus:
          <select onChange={handleChange} placeholder="Select Student">
            <option key="0" value="0">Not Selected</option>
            {  
                allStudents.map(student => {
                   let campusId = student.campusId
                   if(!campusId) {
                     return (
                       <option key = {student.id} value = {student.id}> {student.firstname + " " + student.lastname}</option>
                     );
                   }
                 })
            }
              
          </select>
      </label>
      <button onClick = {handleSubmit} >Enroll </button>
      </form>
      
      </div>
      {
        <Link to={`${campus.id}/edit`}>Update Campus</Link>
      }
    </div>
  );

};

export default CampusView;