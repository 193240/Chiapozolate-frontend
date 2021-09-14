import React, { Component } from 'react'
import axios from 'axios'

export default class tabla extends Component {

    state = {
        pedidos: [],
        _id: ''
    }
    async componentDidMount() {   
        const res = await axios.get('http://localhost:4000/pedidos',{ params: {status:"false"}})
        this.setState({ pedidos: res.data })
    }
    updatePedido = async (id) =>{
        await axios.put('http://localhost:4000/pedidos/'+ id)
    }
    render() {
        return (
            <div className="mt-3">
                <div className="row container-fluid">
                    <div className="col-2 container text-center color-1">
                        <h4 className="h4 fw-bold">Total pendientes</h4>
                        <p className="fw-bold">{this.state.pedidos.length}</p>
                    </div>
                    <div className="col-10 container">
                        <table className="table table-striped">
                            <thead>
                                <tr className=" text-center text-white" style={backColor}>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="justify-content-center text-center">
                                {
                                    this.state.pedidos.map(pedido => (
                                        <tr key={pedido._id}>
                                            <td>{pedido.producto.name}</td>
                                            <td>{pedido.cantidad}</td>
                                            <td>{pedido.cliente.direccion}</td>
                                            <td>{pedido.cliente.name} {pedido.cliente.lastname}</td>
                                            <td>{pedido.date}</td>
                                            <td><button type="button" className="btn cafe-btn shadow fw-bold" 
                                                onClick={()=> this.updatePedido(pedido._id)}>
                                                Entregado</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}
const backColor = {
    backgroundColor: '#c79482'
}
// const tamaño = {
//     height: '600px'
// }