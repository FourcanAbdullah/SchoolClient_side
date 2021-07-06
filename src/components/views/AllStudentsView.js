import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div>There are no students</div>;
    }

    return (
        <div>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/student/${student.id}`}>
                        <h1>{student.firstname}</h1>
                    </Link>
                    <p>{student.lastname}</p>
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