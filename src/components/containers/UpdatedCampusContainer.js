import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCampusThunk, fetchAllCampusesThunk, fetchCampusThunk } from "../../store/thunks";
import { Link } from "react-router-dom";
//import { fetchStudentThunk } from "../../store/thunks";

//import { AddStudentView } from "../views"

class UpdateCampusContainer extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                Name: this.props.campus.name,
                Url: this.props.campus.imageUrl,
                Address: this.props.campus.address,
                Description: this.props.campus.description 
            }
            this.handleName = this.handleName.bind(this);
            this.handleUrl= this.handleUrl.bind(this);
            this.handleAddress = this.handleAddress.bind(this);
            this.handleDescription = this.handleDescription.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this);
/*     
not sure about description initial value for its a text and rest are strings
*/
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
                        Name:
                        <input name= "name" type="text" defaultValue={this.props.campus.value} onChange={this.handleName} />
                    </label>
                    <label>
                        Image URL:
                        <input name = "imageUrl" type="text" defaultvalue={this.props.campus.value} onChange={this.handleUrl} />
                    </label>
                    <label>
                        Address:
                        <input name = "address" type="text" defaultvalue={this.props.campus.value} onChange={this.handleAddress} />
                    </label>
                    
        
                    
                    <label>
                        Description:
                        <input name = "description" type="text" defaultvalue={this.props.campus.value} onChange={this.handleDescription} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }

    handleName(event) {
        this.setState({
            Name: event.target.value
        })

    }
    handleUrl(event) {
        this.setState({
            Url: event.target.value
        })
    }
    handleAddress(event) {
        this.setState({
            Address: event.target.value
        })
    }
    handleDescription(event) {
        this.setState({
            Description: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        let id = this.props.campus.id
        let collegeName = this.props.campus.name ? this.state.Name: this.props.campus.name;
        let imageurl = this.props.campus.imageUrl ? this.state.Url: this.props.campus.imageUrl;
        let addresses = this.props.campus.address ? this.state.Address: this.props.campus.address;
        let descriptions = this.props.campus.description ? this.state.Description: this.props.campus.description;
        let addedData = {
            //this is exact matched model attributes/columns on leftside in backend
            id:id,
            name: collegeName,
            imageUrl: imageurl,
            address: addresses,
            description: descriptions
        }
       console.log(addedData)
       this.props.editCampus(addedData);     
       window.history.go(-1)
       this.props.fetchCampus(id);
    }

}
// Map state to props;
const mapState = (state) => {
    return {
        //addStudent: state.addStudent,
        editCampus: state.editCampus,
        allCampuses: state.allCampuses,
        campus: state.campus
        //student: state.student,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        editCampus: campus => dispatch(editCampusThunk(campus)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id))
      //  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
};

// Type check props;
UpdateCampusContainer.propTypes = {
    //students: PropTypes.array.isRequired,
    //addStudent: PropTypes.func.isRequired,
    editCampus: PropTypes.func.isRequired,
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(UpdateCampusContainer);
