import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/authContext';
import Posts from './pages/posts';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Signin /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/timeline' element={ <Posts /> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
