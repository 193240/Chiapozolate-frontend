import React, { Component } from 'react'
import logo from '../img/1-t.png'
import fondo from '../img/pozolF.jpg';
import { CgFacebook, BsBoxArrowLeft, FcGoogle } from 'react-icons/all';

export default class login extends Component {
    render() {
        return (
            <div className="bg-image  d-flex justify-content-center align-items-center" style={imgB}>
                <div className="text-center container color-1 text-uppercase shadow" style={color}>
                    <div className="mb-2 d-flex justify-content-end">
                    <button type="button" class="btn" style={{color: '#653b2c'}}> <BsBoxArrowLeft/></button>
                    </div>
                    <img src={logo} alt="logo" style={img} className="mb-4" />
                    <form action="" className="px-5">
                        <h5 className="h5 mb-4">iniciar sesion con</h5>
                        <div className="row mb-3">
                            <div className="col">
                            <button type="button" className="btn btn-primary container-fluid"><CgFacebook /></button>
                            </div>
                            <div className="col">
                            <button type="button" className="container-fluid btn" style={{backgroundColor: '#fff'}}><FcGoogle/></button>
                            </div>
                        </div>
                        <input type="mail" className="form-control mb-4"
                            name="name" onChange={this.onChange} required placeholder="Ingrese correo" />
                        <input type="password" className="form-control mb-4"
                            name="name" onChange={this.onChange} required placeholder="Ingrese contraseña" />
                        <button className="btn  shadow cafe-btn fw-bold container-fluid mb-4" type="button">Acceder</button>
                        <button className="btn  shadow cafe-btn fw-bold container-fluid mb-4" type="button">Registrarse</button>
                    </form>
                    
                </div>

            </div>
        )
    }
}
const imgB = {
    background: `url(${fondo}) no-repeat center center/cover`,
    height: '100vh'
}
const img = {
    height: '100%',
    width: '200px'
};

const color = {
    backgroundColor: 'rgb(255, 255, 255, 0.6)',
    width: '400px'
}