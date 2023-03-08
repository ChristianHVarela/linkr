import { useContext, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import userContext from './contexts/userContext';
import Posts from './pages/posts';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

function App() {
  const [user, setUser] = useState(useContext(userContext));

  return (
    <userContext.Provider value={{user, setUser}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Signin /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/posts' element={ <Posts /> } />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
