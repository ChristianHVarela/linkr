import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Posts from './pages/posts';
<<<<<<< HEAD
import UserPage from './pages/user.page/User.Page';
import { GlobalStyle } from './style/reset.css';

function App() {
  return (

    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/posts' element={ <Posts /> } />
          <Route path="/user/:id" element={ <UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
=======
import Signup from './pages/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/posts' element={ <Posts /> } />
      </Routes>
    </BrowserRouter>
>>>>>>> main
  );
}

export default App;
