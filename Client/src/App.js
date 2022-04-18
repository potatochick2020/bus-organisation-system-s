import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import MembersTable from "./components/members/MembersTable"

function App() {
  
  return (
    <Router>
      
      <div className="App">
      <TopBar />  
      <MembersTable />
      </div>
    </Router>
  );
}

export default App;
