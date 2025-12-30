import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Onboarding } from './pages/Onboarding';
import { Vorwort } from './pages/Vorwort';
import { Dashboard } from './pages/Dashboard';
import { DayView } from './pages/DayView';
import { ConcentrationTest } from './pages/ConcentrationTest';
import { Completion } from './pages/Completion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/vorwort" element={<Vorwort />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/day/:day" element={<DayView />} />
        <Route path="/concentration-test/:testNumber" element={<ConcentrationTest />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
