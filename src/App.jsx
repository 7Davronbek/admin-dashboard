import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import BoardPage from "./pages/Board";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="board" element={<BoardPage />} />
      </Routes>
      <Navbar />
    </HashRouter>
  );
};

export default App;
