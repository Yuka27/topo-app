import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SchedulePage from './components/SchedulePage'
import Layout from './components/Layout'
import SessionPage from "./components/SessionPage";
import MapPage from "./components/MapPage";
import "./App.css";
import { useState, useEffect } from "react";
import { Schedule } from "./types/types";


const App: React.FC = () => {
  const [data, setData] = useState<Schedule>();
 
    const fetchJson = () => {
        fetch('./data/schedule.json')
        .then(response => {
          return response.json();
        }).then(data => {
          setData(data);
        }).catch((e: Error) => {
          console.log(e.message);
        });
    }

    useEffect(() => {
        fetchJson()
    },[])
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
