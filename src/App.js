import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          {/* <Route path='/breed' element={<Search />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
