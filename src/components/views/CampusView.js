import { Link } from "react-router-dom";

const CampusView = (props) => {
  const { campus } = props;
  return (
    <div style={{margin:'auto', width: '60%', padding: '10px'}}>
        
        <img style={{height:'200px',width:'200px'}} id="target" src={campus.imageUrl} alt="Campus pic" />
        <h1>{campus.name}</h1>
        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li>
                <Link key={student.id} to={`/student/${student.id}`}>{name} </Link>
              </li>
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