import React, { Component } from 'react'

export default class inicio extends Component {
    render() {
        return (
            <div>
                {/* <!-- Background image --> */}
                <div class="bg-image  d-flex justify-content-center align-items-center text-white mt-2">
                    <div class="text-center">
                        <h1>Chiapozolate</h1>
                        <h3>"Disfruta la bebida de los dioses"</h3>
                    </div>

                </div>
                {/* <!-- Background image --> */}
                <section className="container mt-5">

                    <div className="card mb-3 shadow-sm">
                        <div className="row g-0">
                            <div className="col-2">
                                <div class=" justify-content-center d-flex">
                                    <img src="img/productoE.png" alt="..." class="card-img" style={tamaño} />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card-body">
                                    <h5 class="card-title">POZOL DESHIDRATADO</h5>
                                    <p class="card-text">
                                        ¡Delicioso Pozol deshidratado de cacao desde Chiapas!
                                    </p>
                                    <p class="card-text">
                                        ¿Eres Chiapaneco o visitaste Chiapas y te enamoraste del tradicional Pozol de cacao?
                                    </p>
                                    <p class="card-text">
                                        ¡Ahora puedes adquirirlo con nosotros con ingredientes naturales!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 shadow-sm">
                        <div class="row g-0">
                            <div class="col d-flex align-items-center">
                                <div class="card-body">
                                    <p class="card-text">
                                        ¡Lo mejor de todo es que puedes guardarlo y consumirlo poco a poco, sin riesgo de que se
                                        descomponga al siguiente día!

                                    </p>
                                    <p class="card-text">
                                        El Pozol de cacao es una bebida tradicional chiapaneca, elaborada con maíz, cacao y canela

                                    </p>
                                    <p class="card-text">
                                        Este producto cuenta con ingredientes y procesos de empacado de excelente calidad e higiene.
                                    </p>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="justify-content-center d-flex">
                                    <img src="img/productoE.png" alt="..." class="card-img" style={tamaño} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 p-3 shadow-sm">
                        <div class="row g-0">
                            <div class="col-3 d-flex  justify-content-center align-items-center">
                                <div class="">
                                    <img src="img/pozol.png" alt="..." class="card-img" style={tamaño} />
                                </div>
                            </div>
                            <div class="col text-center d-flex align-items-center">
                                <div class="card-body">
                                    <p class="card-text">
                                        “Lo que hacemos es empaquetar un producto delicioso, refrescante legado de Chiapas, estamos exportando
                                        tradición y cultura”
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 d-flex  justify-content-center align-items-center">
                                <div>
                                    <img src="img/pozol-2.png" alt="..." class="card-img" style={tamaño} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="">

                </footer>
            </div>
        )
    }
}
const tamaño={
    height: '100%', 
    width: '200px'
}