import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Posts from './pages/posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='/posts' element={ <Posts /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
