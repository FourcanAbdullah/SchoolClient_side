import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div>There are no students</div>;
    }
    const { DeleteStudent } = props;

    return (
        <div style={{margin:'auto', width: '60%', padding: '10px'}}>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    {/* <img id="target" src={student.imageUrl} /> */}
                    <Link to={`/student/${student.id}`}>
                        <h1>{student.firstname}</h1>
                    </Link>
                    <p>{student.lastname}</p>
                    {<button onClick={() => { DeleteStudent(student.id) }}>X</button>}
                </div>
            ))}
            <Link to={`/addStudent`}>
                <p>Add Student</p>
            </Link>
            {/* <button onClick={"/addStudent"}>+</button> */}
        </div>
    );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;