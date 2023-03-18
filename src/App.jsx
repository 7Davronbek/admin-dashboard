import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import BoardPage from "./pages/Board";
import User from "./pages/User";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Navbar />
    </HashRouter>
  );
};

export default App;
