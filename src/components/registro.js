import React, { Component } from 'react'
import fondo from '../img/pozolF.jpg';
import logo from '../img/1-t.png'
import { CgFacebook, BsBoxArrowLeft, FcGoogle } from 'react-icons/all';

export default class registro extends Component {
    render() {
        return (
            <div className="bg-image  d-flex justify-content-center align-items-center" style={imgB}>
                <div className="shadow container">
                    <div className="row" style={{ backgroundColor: '#FFFFFF' }}>
                        <div className="col align-self-center d-flex justify-content-center" >
                            <img src={logo} alt="logo" style={img} />
                        </div>
                        <div className="col" style={{ backgroundColor: '#956655' }}>
                            <div className="mb-2 d-flex justify-content-end">
                                <button type="button" class="btn" style={{ color: '#ffff' }}> <BsBoxArrowLeft /></button>
                            </div>
                            <div className="container px-5" style={{ width: '350px' }}>
                                <form action="">
                                    <h4 className="h4 mb-4 text-white fw-bold">Registro</h4>
                                    <input type="mail" className="form-control mb-4"
                                        name="name" onChange={this.onChange} required placeholder="Ingrese correo" />
                                    <input type="password" className="form-control mb-4"
                                        name="name" onChange={this.onChange} required placeholder="Ingrese contraseña" />
                                    <input type="password" className="form-control mb-4"
                                        name="name" onChange={this.onChange} required placeholder="Confirmar contraseña" />
                                    <button className="btn mb-3 shadow white-btn fw-bold container-fluid" type="button">Registrarse</button>
                                    <label className="mb-3 text-white">o Registrarse con</label>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <button type="button" className="btn btn-primary container-fluid"><CgFacebook /></button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="container-fluid btn" style={{ backgroundColor: '#fff' }}><FcGoogle /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const imgB = {
    background: `url(${fondo}) center/cover`,
    height: '100vh'
}
const img = {
    white: '100%',
    height: '150px'
}
