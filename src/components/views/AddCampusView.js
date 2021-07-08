import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import { CampusContainer } from "../containers";

const AddCampusView = (props) => {
    return (
        <div>
            <form onSubmit={this.handlesubmit}>
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

};

export default AddCampusView;