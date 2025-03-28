import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import WorkflowTable from "./pages/WorkFlowTable/WorkFlowTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/WorkflowTable" element={<WorkflowTable />} />
      </Routes>
    </Router>
  );
}

export default App;
