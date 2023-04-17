import "./App.css"
import SideMenu from "./components/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Clients from "./Pages/clients";
import Engineering from "./Pages/engineering";
import Finance from "./Pages/finance";
import Permitting from "./Pages/permitting";
import ProposalsApp from "./Pages/proposalsApp";
import Warehouse from "./Pages/warehouse";
import { useState } from "react";

function App() {

  const [inactive, setInactive] = useState(false);

  return (
  <div className="App">
    <Router>
    <SideMenu onCollapse={(inactive) => {
      setInactive(inactive);
    }}/>
    <div className={`customContainer ${inactive ? "inactive" : ""}`}>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/sales/proposals" element={<ProposalsApp/>} />
        <Route path="/sales/clients" element={<Clients/>} />
        <Route path="/permitting" element={<Permitting/>} />
        <Route path="/engineering" element={<Engineering/>} />
        <Route path="/warehouse" element={<Warehouse/>} />
        <Route path="/finance" element={<Finance/>} />
      </Routes>
    </div>
    
    </Router>
    
  </div>
)};

export default App;
