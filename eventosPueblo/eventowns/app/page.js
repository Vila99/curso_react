import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main>
          <>
      {/* ININIO DEL CAROUSEL */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/carousel2.jpeg"
              alt="festival"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="titulo2 d-flex justify-content-center">
                  What is going on in your town?
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./img/carousel1.jpg"
              alt="festival"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="titulo2">Look what is near you!</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./img/carousel3.jpg"
              alt="festival"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="titulo2">Find new events every week!</h1>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

    </main>
  )
}