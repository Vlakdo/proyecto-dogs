import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import Detail from './views/Detail/Detail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        {/*<Route path='*' element={<Error/>} />*/}
      </Routes>
    </div>
  );
}

export default App;
