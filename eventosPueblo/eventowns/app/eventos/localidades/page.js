import Link from 'next/link'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

export default function Page() {
    return (
        <>
        {/* ININIO DE EVENTOS */}
        <div className="album py-3 bg-body-tertiary" style={{ height: "100%" }}>
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 mx-5 mt-4 justify-content-center">
                <div
                className="card card-hover-zoom mx-4"
                style={{ width: 300, height: 70 }}
                >
                <Link  className="fs-3 text-center titulo text-decoration-none text-dark" href="/eventos/localidades/detalles">Fuentealvilla</Link>
                <p className="fs-9 text-center text-success">Disponible*</p>
                </div>
                <div
                className="card card-hover-zoom mx-4"
                style={{ width: 300, height: 70 }}
                >
                <a
                    className="fs-3 text-center titulo text-decoration-none text-dark"
                    href="detalles.html"
                >
                    Montornes
                </a>
                </div>
                <div
                className="card card-hover-zoom mx-4"
                style={{ width: 300, height: 70 }}
                >
                <a
                    className="fs-3 text-center titulo text-decoration-none text-dark"
                    href="detalles.html"
                >
                    Lepe
                </a>
                </div>
                <div
                className="card card-hover-zoom  mx-4"
                style={{ width: 300, height: 70 }}
                >
                <a
                    className="fs-3 text-center titulo text-decoration-none text-dark"
                    href="detalles.html"
                >
                    Campoamor
                </a>
                </div>
                <div
                className="card card-hover-zoom  mx-4"
                style={{ width: 300, height: 70 }}
                >
                <a
                    className="fs-3 text-center titulo text-decoration-none text-dark"
                    href="detalles.html"
                >
                    Sitges
                </a>
                </div>
                <div
                className="card card-hover-zoom  mx-4"
                style={{ width: 300, height: 70 }}
                >
                <a
                    className="fs-3 text-center titulo text-decoration-none text-dark"
                    href="detalles.html"
                >
                    Zumaya
                </a>
                </div>
            </div>
            </div>
        </div>
        </>

    )
  }