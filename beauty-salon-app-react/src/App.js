import { Routes, Route } from 'react-router-dom';
import ClientSearch from './components/ClientSearch';
import Navbar from './components/Navbar';
import SingleClientModal from './components/SingleClientModal';

function App() {
  return (
    <div>
      <SingleClientModal />
      <Navbar />
      <ClientSearch />
    </div>
  );
}

export default App;
