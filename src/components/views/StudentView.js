import { Link } from "react-router-dom";
//import { CampusContainer } from "../containers";

const StudentView = (props) => {
    const { student, DeleteStudent, EditStudent } = props;
    return (
        <div style={{margin:'auto', width: '60%', padding: '10px'}}>
            <img id="target" style={{height:'200px',width:'200px'}} src={student.imageUrl} />
            <h1>{student.firstname + " " + student.lastname}</h1>
            <p>Email:{student.email}</p>
            <p>GPA:{student.gpa}</p>
            <ul>
                {

                    <Link to={`/campus/${student.campusId}`}>Campus</Link>

                    //< li key={student.id}>{student.firstname}</li>
                    // < li key={student.id}>{student.campus.name}</li>
                }

            </ul>
            {
                <Link to={`${student.id}/edit`}>Update Student</Link>
            }
            {
                <button onClick={DeleteStudent} >Delete Student</button>
            }
        </div >
    );

};

export default StudentView;