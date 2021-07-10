import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { Link } from "react-router-dom";
import { fetchStudentThunk } from "../../store/thunks";



class UpdateStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.student.firstname,
            lastName: this.props.student.lastname,
            Email: this.props.student.email,
            image: this.props.student.imageUrl,
            gpa: this.props.student.gpa,
            campusId: this.props.student.campusId,


        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleGpa = this.handleGpa.bind(this);
        this.handleCollege = this.handleCollege.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)


    }


    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllCampuses();
    }
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input name="firstname" type="text" defaultValue={this.props.student.value} onChange={this.handleFirstName} />
                    </label>
                    <label>
                        Last Name:
                        <input name="lastname" type="text" defaultValue={this.props.student.value} onChange={this.handleLastName} />
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" defaultValue={this.props.student.value} onChange={this.handleEmail} />
                    </label>
                    <label>
                        image:
                        <input name="imageUrl" type="text" defaultValue={this.props.student.value} onChange={this.handleImage} />
                    </label>
                    <label>
                        GPA:
                        <input name="gpa" type="text" defaultValue={this.props.student.value} onChange={this.handleGpa} />
                    </label>
                    <label>
                        Select College:
                        <select value={this.props.student.campusId} onChange={this.handleCollege} placeholder="Select College">
                            <option key="0" value={undefined}>Not Selected</option>
                            {
                                this.props.allCampuses.map(campus => {
                                    let campusName = campus.name
                                    let campusId = campus.id
                                    return (
                                        <option key={campusId} value={campusId}>{campusName}</option>
                                    );
                                })
                            }


                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button to={`student/${this.props.student.id}`}>Cancel</button>
            </div >
        );
    }

    handleFirstName(event) {
        this.setState({
            firstName: event.target.value
        })

    }

    handleLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmail(event) {
        this.setState({
            Email: event.target.value
        })
    }
    handleImage(event) {


        this.setState({
            image: event.target.value
        });


        // this.setState({
        //     Email: event.target.value
        // })
    }
    handleGpa(event) {
        let g = Number(event.target.value).toFixed(2)
        this.setState({
            gpa: g
        })
    }
    handleCollege(event) {
        let campus = Number(event.target.value)
        console.log(`Campus: ${campus}`)
        this.setState({
            campusId: campus
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.campus)
        console.log(event);
        let id = this.props.student.id
        let firstname = this.props.student.firstname ? this.state.firstName : this.props.student.firstname;
        let lastname = this.props.student.lastname ? this.state.lastName : this.props.student.lastname;
        let email = this.props.student.email ? this.state.Email : this.props.student.email
        let campusId = this.props.student.campusId ? this.state.campusId : this.props.student.campusId
        let imageUrl = this.props.student.imageUrl ? this.state.image : this.props.student.imageUrl
        let gpa = this.props.student.gpa ? this.state.gpa : this.props.student.gpa
        if (this.props.student.gpa === 0) {
            gpa = this.state.gpa
        }
        console.log(this.state.campusId)
        console.log(this.state.gpa)
        if (!(this.props.student.campusId)) {
            campusId = this.state.campusId
        }
        let addedData = {
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            campusId: campusId,
            imageUrl: imageUrl,
            gpa: gpa,
        }
        console.log(addedData)

        this.props.editStudent(addedData);

        window.history.go(-1)
        //window.location = `/student/${this.props.fetchStudent(id)}`
    }

}
// Map state to props;
const mapState = (state) => {
    return {
        //addStudent: state.addStudent,
        editStudent: state.editStudent,
        allCampuses: state.allCampuses,
        student: state.student,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        editStudent: student => dispatch(editStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
};

// Type check props;
UpdateStudentContainer.propTypes = {
    //students: PropTypes.array.isRequired,
    //addStudent: PropTypes.func.isRequired,
    editStudent: PropTypes.func.isRequired,
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(UpdateStudentContainer);
