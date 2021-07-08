import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk} from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }
  EditCampus = () => {
    this.props.editCampus(this.props.match.params.id);
    window.history.back()
  }
  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        EditCampus={this.EditCampus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: campus => dispatch(editCampusThunk(campus))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);