import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// import Login from './components/login'
//  import Registro from './components/registro'
//cliente
//  import Head from './components/Header'
// import NavC from './components/NavC'
//  import Inicio from './components/inicio'
//  import Productos from './components/productos'
//Vistas administrador
 import Nav from './components/Nav'
 import Tabla from './components/tabla'
 import TablaE from './components/tablaE'
 import configuracion from './components/configuracion'
function App() {
  return (
    <Router>
      {/* <Login/>
      <Registro/> */}
       {/* <Head/>
      <NavC/> 
       <Inicio/>
       <Route exact path="/" component={Inicio} />
      <Route exact path="/productos" component={Productos} />  */}
      <Nav/>
      <Route exact path="/" component={configuracion} />
      <Route exact path="/pendiente" component={Tabla} />
      <Route exact path="/entregado" component={TablaE} />
    </Router>
  );
}


export default App;
