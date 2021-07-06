import { Link } from "react-router-dom";
//import { CampusContainer } from "../containers";

const StudentView = (props) => {
    const { student, DeleteStudent } = props;
    return (
        <div>
            <h1>{student.firstname + " " + student.lastname}</h1>
            <p>Hello</p>
            <ul>
                {

                    <Link to={`/campus/${student.campusId}`}>Campus</Link>

                    //< li key={student.id}>{student.firstname}</li>
                    // < li key={student.id}>{student.campus.name}</li>
                }

            </ul>
            {
                <button onClick={DeleteStudent} >Delete Student</button>
            }
        </div >
    );

};

export default StudentView;