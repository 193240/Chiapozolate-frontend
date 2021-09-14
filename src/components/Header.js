import React, { Component } from 'react'
import logo from '../img/1-t.png'

export default class Header extends Component {
    render() {
        return (
      
                <div className="container-fluid fixed row" >
                        <div className="d-flex justify-content-between" style={footer}>
                        <div></div>
                        <img src={logo} alt="logo" style={img} />
                        <div className="d-flex align-items-center">
                        <button className="btn  shadow white-btn fw-bold" type="button">Iniciar sesion</button>
                        <button className="btn  shadow cafe-btn fw-bold" type="button">Registrarse</button>
                    </div>
                        </div> 

                </div>
        )
    }
}
const img = {
    height: '100%',
};
const footer = {
    height: '100px'
}