import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Posts from './pages/posts';
import Signup from './pages/signup/signup';
import UserPage from './pages/user.page/User.Page';

function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path='/' />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/posts' element={ <Posts /> } />
        <Route path="/user/:id" element={ <UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
