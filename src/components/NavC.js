import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavC extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav fw-bold text-center navC">
                        <li className="nav-item flex-fill barra-r">
                            <Link className="nav-link " to="/">Inicio</Link>
                        </li>
                        <li className="nav-item barra-l flex-fill barra-r">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item barra-r flex-fill barra-l">
                            <Link className="nav-link" to="/quinesSomos">Quienes somos</Link>
                        </li>
                        <li className="nav-item flex-fill barra-l">
                            <Link className="nav-link" to="/elaboracion">Elaboracion</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
