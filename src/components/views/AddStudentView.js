import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import { CampusContainer } from "../containers";

const AddStudentView = (props) => {
    const { addStudent } = props;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={this.state.value} onChange={this.handleFirstName} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={this.state.value} onChange={this.handleLastName} />
                </label>
                <label>
                    Select College:
                    <select value={this.state.value} onChange={this.handleCollege}>
                        { }

                        <option value="1">Hunter College</option>
                        <option value="2">Harvard</option>

                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div >
    );

};

export default AddStudentView;