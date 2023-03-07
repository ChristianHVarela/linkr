import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='/posts' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
