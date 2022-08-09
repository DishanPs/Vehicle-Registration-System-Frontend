import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Regform from './componenets/Regform';
import Viewvehicles from './componenets/Viewvehicles';
import Updateform from './componenets/Updateform';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Regform />} />
          <Route path="/viewvehicles" exact element={<Viewvehicles />} />
          <Route path="/updatevehicle" exact element={<Updateform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
