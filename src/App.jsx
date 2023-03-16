import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      <Navbar />
    </HashRouter>
  );
};

export default App;
