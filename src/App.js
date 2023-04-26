import "./App.css";
import Reminder from "./reminder";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faHome} className="home-icon" size="2xl"/>
      <div className="title">
        REMINDERSSSSS
      </div>
      <Reminder></Reminder>
    </div>
  );
}

export default App;
