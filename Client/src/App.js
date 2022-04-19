import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import MembersTable from "./components/members/MembersTable"
import EmailPage from "./pages/EmailPage/EmailPage"
function App() {
  
  return (
    <BrowserRouter>
      
      <div className="App">
      <TopBar />  
      <Routes>
        <Route path="/" element={<MembersTable  />} />
        <Route path="/Email" element={<EmailPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
