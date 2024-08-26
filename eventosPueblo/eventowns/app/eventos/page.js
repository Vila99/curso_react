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
                <Link href="/eventos/localidades" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="/img/evento1.webp" alt="evento1" />
                    <div className="card-body">
                    <h3>Color Party</h3>
                    <p className="card-text">
                    Un evento vibrante y lleno de energía donde los participantes se lanzan polvos de colores brillantes mientras bailan al ritmo de música festiva.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Disponible</small>
                    </div>
                    </div>
                </Link>
                </div>
                
                {/* RESTO DEL CODIGO PARA QUE SALTE EL ERROR */}
                <div className="col">
                <Link href="detalles.html" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="./img/evento2.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Peace and Love</h3>
                    <p className="card-text">
                    Este es un evento para que la gente disfrute de la armonía y la paz de forma conjunta. Unete para conocer a gente con la que compartir la vida.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col">
                <Link href="detalles.html" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="./img/evento3.webp" alt="" />
                    <div className="card-body">
                    <h3>Ritual Chino</h3>
                    <p className="card-text">
                    Con este evento tipico de la cultura china, se intenta dar a conocer rituales que tienen en otros continentes para aventurar buena suerte al año.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col">
                <Link href="detalles.html" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="./img/evento4.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Castellers</h3>
                    <p className="card-text">
                    Clásico evento catalan donde podrás ver torres de humanos, si te interesa más se podrán hacer talleres sobre como llegar a ser parte de la "Colla".
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col">
                <Link href="detalles.html" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="./img/evento5.jpeg" alt="" />
                    <div className="card-body">
                    <h3>Fireworks</h3>
                    <p className="card-text">
                    Festival de origen valenciano, disfruta de la magia del fuego y de las explosiones de colores. Reservate una noche, no puedes perdertelo!
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col">
                <Link href="detalles.html" className="card shadow-sm text-decoration-none text-reset card-hover-zoom">
                    <img src="./img/evento6.jpeg" alt="" />
                    <div className="card-body">
                    <h3>LGTBIQ+ FEST</h3>
                    <p className="card-text">
                    Como su nombre indica, se trata de un festival para todo aquel que se sienta identificado o quiera saber más. Es un espacio inclusivo para todos!
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-danger">No disponible</small>
                    </div>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </>


    )
  }