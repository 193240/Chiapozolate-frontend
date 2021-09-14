import React, { Component } from 'react'
import axios from 'axios'
import imagen from '../img/productoE.png'

export default class productos extends Component {

    state = {
        productos: [],
        name: '',
        precio: '',
        stock: ''
    }
    convertirDolar(){
        
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/productos')
        this.setState({ productos: res.data })
        // console.log(this.state.data)
    }

    render() {
        return (
            <div className="mt-4 container">
                {
                    this.state.productos.map(producto =>
                        <div className="card mb-3 shadow-sm px-4 py-4" style={tamaño} key={producto._id}>
                            <div className="row g-0">
                                <div className="col">
                                    <div class=" justify-content-center d-flex aling-items-center">
                                        <img src={imagen} alt="..." class="card-img" style={img} />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <h6 class="card-title h6 fw-bold mb-5">Pozol deshidratado {producto.name}</h6>
                                        <div className="row mt-3 text-center">
                                            <p class="card-text col-6">
                                                {producto.precio}$ MXN
                                            </p>
                                            <p class="card-text col-6">
                                                {producto.precio}$ USD
                                            </p>
                                        </div>
                                        <p class="card-text">
                                            Envio no incluido
                                        </p>
                                        <p class="card-text">
                                            Envios intercionales
                                        </p>
                                        <p class="card-text">
                                            <a href="">Mas informacion</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col align-items-center d-flex">
                                    <div className="container px-5">
                                    <div class="card px-3 py-5">
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="mb-3">Cantidad:</label>
                                                <input type="number" className="form-control"
                                                    name="stock" onChange={this.onChange} required placeholder="0" />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <label className="mb-3">Disponible:</label>
                                                <p className="text-center">{producto.stock}</p>
                                            </div>
                                            <div className="">
                                                <button className="btn  shadow cafe-btn fw-bold container-fluid" type="button">Comprar ahora</button>
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        )
    }
}
const tamaño = {
    height: '300px'
}

const img ={
    height: '100%',
    width: '200px',
}