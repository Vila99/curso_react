import Link from 'next/link'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EventTown',
  description: 'Eventos en tu pueblo',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet"></link>
      <body>
        {/*BARRA NAVEGACION*/}
        <nav className="bg-dark">
        <header className="d-flex flex-wrap justify-content-center py-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-2 text-light titulo">EventTowns</span>
          </a>
          <ul className="nav nav-pills me-5 align-items-center">
            <li className="nav-item">
            <Link  className="nav-link active bg-light text-dark titulo" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light titulo" href="/eventos">Eventos</Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-light titulo">
                Contacto
              </a>
            </li>
          </ul>
        </header>
      </nav>
        {children}
      {/* FOOTER */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 bg-dark px-5">
        <p className="col-md-4 mb-0 text-light">© 2024 Company, Inc</p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <p className="titulo text-light align-items-center mb-0">EvenTowns</p>
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              About
            </a>
          </li>
        </ul>
      </footer>

      </body>
    </html>
  )
}