import { Routes, Route } from 'react-router-dom';
import ClientSearch from './components/ClientSearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ClientSearch />
    </div>
  );
}

export default App;
