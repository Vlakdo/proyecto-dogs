import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import Detail from './views/Detail/Detail';
import NewDog from './views/NewDog/NewDog';
import Error from './views/Error/Error';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path='/' element={<NewDog />} />*/}
        {<Route path='/' element={<LandingPage />} />}
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/createDog' element={<NewDog />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
