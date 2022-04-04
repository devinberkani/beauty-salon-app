import { Routes, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
