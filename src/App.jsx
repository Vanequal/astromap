import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NatalChart from './pages/NatalChart';
import Analysis from './pages/Analysis';
import Settings from './pages/Settings';
import Learning from './pages/Learning';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/natal-chart" element={<NatalChart />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
