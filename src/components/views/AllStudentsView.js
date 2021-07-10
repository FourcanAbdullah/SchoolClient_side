import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    const { DeleteStudent } = props;
    if (!props.allStudents.length) {

        return (<div>
            <div>There are no students</div>
            <Link to={`/addStudent`}>
                <button>Add New Student</button>
            </Link>
        </div>);

    }


    return (
        <div style={{ margin: 'auto', width: '60%', padding: '10px' }}>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    {/* <img id="target" src={student.imageUrl} /> */}
                    <Link to={`/student/${student.id}`}>
                        <h1>{student.firstname + " " + student.lastname}</h1>
                    </Link>
                    <p>{student.email}</p>
                    {<button onClick={() => { DeleteStudent(student.id) }}>Delete</button>}
                </div>
            ))}
            <Link to={`/addStudent`}>
                <button>Add New Student</button>
            </Link>
            {/* <button onClick={"/addStudent"}>+</button> */}
        </div>
    );
};


export default AllStudentsView;