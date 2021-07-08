import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { Link } from "react-router-dom";

import { AddCampusView } from "../views"

class AddCampusContainer extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                Name: '',
                Url: "https://www.cappex.com/sites/default/files/images/hero/college/190150_hero.jpg",
                Address: '',
                Description: '' 
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
                        <input type="text" value={this.state.value} onChange={this.handleName} />
                    </label>
                    <label>
                        Image URL:
                        <input type="text" value={this.state.value} onChange={this.handleUrl} />
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.state.value} onChange={this.handleAddress} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={this.state.value} onChange={this.handleDescription} />
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

        let addedData = {
            //this is exact matched model attributes/columns on leftside in backend
            name: this.state.Name,
            imageUrl: this.state.Url,
            address: this.state.Address,
            description: this.state.Description 
        }
       console.log(addedData)
       //this.props.addCampus(addedData);    //line which is not working as it is supposed to.
       this.props.addCampus(addedData);     
       window.history.go(-1)
    }

}
// Map state to props;
const mapState = (state) => {
    return {
        addCampus: state.addCampus,
        allCampuses: state.allCampuses,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
};

// Type check props;
AddCampusContainer.propTypes = {
    //students: PropTypes.array.isRequired,
    addCampus: PropTypes.func.isRequired,
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};
//test

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);