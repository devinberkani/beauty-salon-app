import { Routes, Route } from 'react-router-dom';
import ClientSearch from './components/ClientSearch';
import EditClientModal from './components/EditClientModal';
import Navbar from './components/Navbar';
import ViewClientModal from './components/ViewClientModal';

function App() {
  return (
    <div>
      <EditClientModal />
      <ViewClientModal />
      <Navbar />
      <ClientSearch />
    </div>
  );
}

export default App;
