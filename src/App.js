import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Posts from './pages/posts';
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
  );
}

export default App;
