
import './App.css';
import Menu from './componentes/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import Formulario from './componentes/Formulario';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <div>
          <Routes>
            <Route path='/' element={<Inicio />}>Inicio</Route>

            <Route path='/Nosotros' element={<Nosotros />}></Route>
            <Route path='/Contacto' element={<Contacto />}></Route>
            <Route path='/Formulario' element={<Formulario />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
