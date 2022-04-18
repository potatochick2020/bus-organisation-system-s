import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get("/members/getAll");
      console.log("here");
      console.log(res.data);
      setMembers(res.data);
    };
    fetchMembers();
  });

  return (
    <Router>
      
      <div className="App">
      <TopBar />  
      testing
        <ul>
          hi
        </ul>
        <ul>
            {members.map((p) => (
              p.Lname
          ))}
        </ul>
        <ul>
            {members.map((p) => (
              p.Fname
          ))}
        </ul>
        <ul>
            {members.map((p) => (
              p.Address
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;