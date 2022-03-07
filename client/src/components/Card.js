import '../App.css';

// get our fontawesome imports
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const user = [
    {
        firstname: 'Jimmy',
        lastname: 'Bob',
        location: '',
        interest: 'music'
    },
    {
        firstname: 'Sarah',
        lastname: 'Franks',
        location: '',
        interest: 'sport'
    },
    {
        firstname: 'Simon',
        lastname: 'Geeves',
        location: '',
        interest: 'tech'
    }
]

function Card() {
    return  <div className="users">
                {user.map((data) => (
                    <div className="card-container">
                    <div className="card-container-info">
                        <h4 className="card-container-info-title">{data.firstname} {data.lastname}First Last</h4>
                        <p className="card-container-info-p">Location</p>
                        <p className="card-container-info-p">{data.interest}</p>
                    </div>
                    <div className="card-container-right">
                        <FontAwesomeIcon icon={faMusic} /> 
                    </div>
                </div>
                ))}
            </div>
  }

export default Card; 
