import Link from 'next/link'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

export default function Page() {
    return(
        <>
        <h1 className="titulo d-flex align-items-center mt-3 justify-content-center">
            Color Party
        </h1>
        <div className="py-2">
            <div
            className="card mb-4 mt-4 mx-5 d-flex align-items-center"
            style={{ maxWidth: "100%", maxHeight: 393 }}
            >
            <div className="row g-0">
                <div className="col-md-6">
                <img
                    id="evento"
                    src="./img/evento1.webp"
                    className="img-fluid rounded"
                    alt="..."
                />
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title pt-4 ps-3">📍FUENTEALVILLA</h5>
                    <ul className="py-4 fs-5" style={{ listStyle: "none" }}>
                    <li className="py-2">
                        <span className="fw-bold">Horario:</span> Sàbado 24 de Agosto de
                        2024.
                    </li>
                    <li className="py-2">
                        <span className="fw-bold">Edad:</span> Todos los públicos
                    </li>
                    <li className="py-2">
                        <span className="fw-bold">Dresscode:</span> Veraniego para no
                        pasar calor.
                    </li>
                    <li className="py-2">
                        <span className="fw-bold">Comida:</span> Se puede traer comida.
                    </li>
                    </ul>
                    <p className="card-text text-end pe-4">
                    <small className="text-body-secondary">
                        Last updated 3 mins ago
                    </small>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}