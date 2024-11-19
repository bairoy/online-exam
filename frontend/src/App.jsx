import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import PasswordRecovery from "./pages/PasswordRecovery.jsx";
import Logout from "./pages/Logout.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ProctorDash from "./pages/proctordash.jsx";
import StudentDash from "./pages/StudentDash.jsx";
import AdminDash from "./pages/AdminDash.jsx";
import AddExam from "./pages/AddExam.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recovery" element={<PasswordRecovery />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/proctordash" element={<ProctorDash />} />
        <Route path="/studentdash" element={<StudentDash />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/addexam" element={<AddExam />} />
      </Routes>
    </Router>
  );
}
export default App;
