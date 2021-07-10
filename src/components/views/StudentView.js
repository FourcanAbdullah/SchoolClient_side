import { Link } from "react-router-dom";
//import { CampusContainer } from "../containers";

const StudentView = (props) => {
    const { student } = props;
    return (
        <div style={{ margin: 'auto', width: '60%', padding: '10px' }}>
            <img id="target" style={{ height: '200px', width: '200px' }} src={student.imageUrl} />
            <h1>{student.firstname + " " + student.lastname}</h1>
            <p>Email:{student.email}</p>
            <p>GPA:{student.gpa}</p>
            {!(student.campusId) ? <p>Campus not Selected</p> :
                <ul>
                    {
                        <Link to={`/campus/${student.campusId}`}>{student.campus.name}</Link>
                    }

                </ul>
            }
            {
                <Link to={`${student.id}/edit`}><button>Update Student</button></Link>
            }

        </div >
    );

};

export default StudentView;