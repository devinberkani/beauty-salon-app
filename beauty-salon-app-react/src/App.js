import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
