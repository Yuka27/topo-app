import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SchedulePage from './components/SchedulePage'
import Layout from './components/Layout'
import SessionPage from "./components/SessionPage";
import MapPage from "./components/MapPage";
import "./App.css";


const App: React.FC = () => {
  let data = require('./schedule.json');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schedule" element={<SchedulePage data={data} />} />
        <Route path="sessions" element={<SessionPage data={data} />} />
        <Route path="map" element={<MapPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
