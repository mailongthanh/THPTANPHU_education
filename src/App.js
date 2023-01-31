import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home/home";
import Student__information from "./pages/User/Student/Student-information/Student__information";
import Student__schedule from "./pages/User/Student/Student-schedule/Student__schedule";
import Student__outcome from "./pages/User/Student/Student-outcome/Student__outcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentInfoDetails" element={<Student__information />} />
        <Route path="/StudentSchedule" element={<Student__schedule />} />
        <Route path="/StudentOutcome" element={<Student__outcome />} />
      </Routes>
    </div>
  );
}

export default App;
