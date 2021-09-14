import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/1-t.png'


export default class nav extends Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <div>
                <nav style={navbar}>
                    <ul className=" navbar nav text-center fw-bold ">
                        <li className="nav-item flex-fill ">
                            <img src={logo} alt="" width="100" />
                        </li>
                        <li className="nav-item flex-fill ">
                            <Link className="nav-link text-white" to="/">Configuracion</Link>
                        </li>
                        {/* <li className="nav-item flex-fill">
                            <Link className="nav-link text-white" to="#">Nuevo Producto</Link>
                        </li> */}
                        <li className="nav-item flex-fill ">
                            <Link className="nav-link text-white" to="/pendiente">Pendiente</Link>
                        </li>
                        <li className="nav-item flex-fill">
                            <Link className="nav-link text-white" to="/entregado">Entregado</Link>
                        </li>
                        <li className="nav-item flex-fill">
                            <button className="btn  shadow white-btn fw-bold" type="button">Cerrar sesion</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}
const navbar = {
    backgroundColor: '#956655',
}
// const btnC = {
//     color: '#956655',
//   backgroundColor: '#fff'
// }
