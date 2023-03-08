import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Posts from './pages/posts';
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
  );
}

export default App;
