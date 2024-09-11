import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Eventown',
  description: 'Eventos de nuestro pueblo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/" className="navbar-brand">Eventown</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link href="/eventos" className="nav-link">Eventos</Link>
                </li>
                <li className="nav-item">
                  <Link href="/localidades" className="nav-link">Locales</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container mt-4">
          {children}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
}