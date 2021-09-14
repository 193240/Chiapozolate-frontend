import React, { Component } from 'react'
import axios from 'axios'

export default class producto extends Component {
    state = {
        productos: [],
        name: '',
        precio: '',
        stock: '',
    }
    onSubmit = async e => {
        const productoNuevo = {
            name: this.state.name,
            precio: this.state.precio,
            stock: this.state.stock
        }
     // console.log(this.state.name, this.state.precio)
     await axios.post('http://localhost:4000/productos', productoNuevo)
     e.preventDefault();
    }
    onChange = e => {
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/productos')
        this.setState({ productos: res.data })
        // console.log(this.state.data)
    }
    updateProduct = async (id) =>{
        const productoNuevo = {
            precio: this.state.precio,
            stock: this.state.stock
        }
        await axios.put('http://localhost:4000/productos/'+ id, productoNuevo)
        this.componentDidMount();
    }
    render() {
        return (
            <div className="container-fluid mt-2 p-2 row">
                <div className="col-8">
                    <div className="container card mb-3 py-3" style={tamaño}>
                        <h2 className="h2 m-2">Cambiar precio</h2>
                        <div className=" overflow-auto">
                            {
                                this.state.productos.map(producto =>
                                    <div className="p-2 mb-2" key={producto._id}>
                                        <div className="row container">
                                            <div className="col">{producto.name}</div>
                                            <div className="col">Precio actual: {producto.precio}</div>
                                            <div className="col">
                                                <input type="number" className="form-control" id="typeNumber"
                                                    name="precio" onChange={this.onChange} required placeholder="Nuevo precio" />
                                            </div>
                                            <div className="col  text-center">
                                                <button type="submit" className="btn btn-primary"
                                                onClick={()=> this.updateProduct(producto._id)}>
                                                Actualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="container card py-3" style={tamaño}>
                        <h2>Stock</h2>
                        <div className="overflow-auto">
                            {
                                this.state.productos.map(producto =>
                                    <div className="p-2 mb-2 row container" key={producto._id}>
                                        <div className="col">{producto.name}</div>
                                        <div className="col">En almacen: {producto.stock}</div>
                                        <div className="col">
                                            <input type="number" className="form-control"
                                                name="stock" id="clear" onChange={this.onChange} required placeholder="Agregar" />
                                        </div>
                                        <div className="col text-center">
                                            <button type="submit" className="btn btn-primary"
                                            onClick={()=> this.updateProduct(producto._id)}>                                            
                                            Actualizar</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container card shadow">
                        <div className="text-center mt-2">
                            <h2>Nuevo producto</h2>
                        </div>

                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control"
                                    name="name" onChange={this.onChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" className="form-control"
                                    name="precio" onChange={this.onChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input type="number" className="form-control"
                                    name="stock" onChange={this.onChange} required />
                            </div>
                            <footer className="mb-2 text-center">
                                <button type="submit" className="btn btn-primary">Agregar</button>
                            </footer>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const tamaño = {
    height: '300px'
}
