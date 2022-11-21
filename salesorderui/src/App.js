import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='*' element={<div>Main</div>}/>
      <Route path='detail' element={<div>Detail</div>}/>
    </Routes>
  );
}

export default App;
