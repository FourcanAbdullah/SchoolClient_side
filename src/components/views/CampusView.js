import { Link } from "react-router-dom";

const CampusView = (props) => {
  const { campus } = props;
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.imageUrl}</p>
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>
      <ul>
        {campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <Link key={student.id} to={`/student/${student.id}`}>{name}</Link>
            //<li key={student.id}>{name}</li>
          );
        })}
        
      </ul>
      {
        <Link to={`${campus.id}/edit`}>Update Campus</Link>
      }
    </div>
  );

};

export default CampusView;