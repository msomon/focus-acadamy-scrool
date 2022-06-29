
import './App.css';
import Navbar from '../src/Pages/Share/Navbar'
import { Route, Routes } from 'react-router-dom';
import Users from '../src/Pages/Users/Users'
import RequireAuth from '../src/Pages/Login/RequireAuth'
import Login from '../src/Pages/Login/Login'
import SignUp from '../src/Pages/Login/SignUp'

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>

    <Route path='/users' element={<RequireAuth>
      <Users/>
    </RequireAuth>}></Route>
    <Route path ='/login' element={<Login></Login>}></Route>
    <Route path ='/signup' element={<SignUp/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
