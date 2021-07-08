import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteCampus } from "../../store/actions/actionCreators";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }
  const {deleteCampus} = props;

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
           {<button onClick={() => { deleteCampus(campus.id) }}>X</button>}
          <img id="target" src={campus.imageUrl} alt="Campus pic" />
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          {/* <p>{campus.description}</p> */}  
        </div>
      ))}

        <Link to={`/addCampus`}>
          <p>Add Campus</p>
        </Link>

    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;