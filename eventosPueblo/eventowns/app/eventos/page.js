import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export default function Page() {
    return (
        <>
        {/* ININIO DE EVENTOS */}
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
                <Link href="/localidades" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="/img/evento1.webp" alt="evento1" />
                    <div className="card-body">
                    <h3>Color Party</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Disponible</small>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col">
                <div className="card shadow-sm">
                    <img src="./img/evento2.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Peace and Love</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src="./img/evento3.webp" alt="" />
                    <div className="card-body">
                    <h3>China Culture</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src="./img/evento4.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Castellers</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src="./img/evento5.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Pirotech</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src="./img/evento6.jpeg" alt="" />
                    <div className="card-body">
                    <h3>LGTBIQ+ FEST</h3>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>


    )
  }