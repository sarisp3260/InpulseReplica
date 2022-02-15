import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Pages from './components/Pages';
/* <Route path='/Home' element={<Home/>}/> */


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Pages' element={<Pages/>}/>
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
