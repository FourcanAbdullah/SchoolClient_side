import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { Link } from "react-router-dom";
import { fetchStudentThunk } from "../../store/thunks";

//import { AddStudentView } from "../views"

class AddStudentContainer extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                fistName: '',
                lastName: '',
                Email: '',
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                gpa: 0,
                campusId: null,     //fixed that error.
                data: []

            }

            this.handleFirstName = this.handleFirstName.bind(this);
            this.handleLastName = this.handleLastName.bind(this);
            this.handleEmail = this.handleEmail.bind(this);
            this.handleImage = this.handleImage.bind(this);
            this.handleGpa = this.handleGpa.bind(this);
            this.handleCollege = this.handleCollege.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this)


        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllCampuses();
    }
    render() {
        return (
            // <AddStudentView
            // //addStudent={this.props.addStudent}
            // //campus={this.props.campus}
            // />
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
                        Email:
                        <input type="email" value={this.state.value} onChange={this.handleEmail} />
                    </label>
                    <label>
                        image:
                        <input type="text" value={this.state.value} onChange={this.handleImage} />
                    </label>
                    <label>
                        GPA:
                        <input type="text" value={this.state.value} onChange={this.handleGpa} />
                    </label>
                    <label>
                        Select College:
                        <select value={this.state.value} onChange={this.handleCollege} placeholder="Select College">
                            <option key="0" value="0">Not Selected</option>
                            {
                                this.props.allCampuses.map(campus => {
                                    let campusName = campus.name
                                    let campusId = campus.id
                                    return (
                                        <option key={campusId} value={campusId}>{campusName}</option>
                                    );
                                })
                            }
                            {/* <option value="1">Hunter College</option>
                            <option value="2">Harvard</option> */}

                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }

    handleFirstName(event) {
        this.setState({
            fistName: event.target.value
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
        // if (event.target.files && event.target.files[0]) {
        //     this.setState({
        //         image: URL.createObjectURL(event.target.files[0])
        //     });
        // }

        this.setState({
            image: event.target.value
        })
    }
    handleGpa(event) {
        let g = Number(Number(event.target.value).toFixed(2))
        this.setState({
            gpa: g
        })
    }
    handleCollege(event) {
        let campus = Number(event.target.value)
        this.setState({
            campusId: campus
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        let addedData = {
            firstname: this.state.fistName,
            lastname: this.state.lastName,
            email: this.state.Email,
            campusId: this.state.campusId,
            imageUrl: this.state.image,
            gpa: this.state.gpa,
        }
        console.log(addedData)
        // this.state.data.push(addedData)
        // this.setState({
        //     data: this.state.data
        // })
        // console.log(this.state.data)
        this.props.addStudent(addedData);
        // this.props.dispatch({
        //     type: 'ADD_POST',
        //     addedData
        // });
        //   this.getTitle.value = '';
        //   this.getMessage.value = '';
        window.history.go(-1)
        //window.location = `/student/${this.props.fetchStudent(id)}`
    }

}
// Map state to props;
const mapState = (state) => {
    return {
        addStudent: state.addStudent,
        allCampuses: state.allCampuses,
        student: state.student,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
};

// Type check props;
AddStudentContainer.propTypes = {
    //students: PropTypes.array.isRequired,
    addStudent: PropTypes.func.isRequired,
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddStudentContainer);
