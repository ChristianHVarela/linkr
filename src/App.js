import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu/index';
import Posts from './pages/posts';
import Signup from './pages/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path='/' />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/posts' element={ <Posts /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
