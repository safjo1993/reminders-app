import "./App.css";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reminder() {
  return (
    <div className="card">
      <FontAwesomeIcon className="empty-circ" icon={faCircleNotch} size="2xl" />
      <div className="reminder">
        <p>Pick up Nathan from work</p>
      </div>
    </div>
  );
}

export default Reminder;
