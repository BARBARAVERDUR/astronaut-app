
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import { Register  } from './components/Register';
import { COMMUNITY, HOME, REGISTER } from './constants/App.constants';
import { Community } from './components/Community';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path={HOME}  element={<Main/>}/>
      <Route path={REGISTER}  element={<Register/>}/>
      <Route path={COMMUNITY}  element={<Community/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
