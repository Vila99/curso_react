import { auto } from '@popperjs/core';
import Image from 'next/image';

async function getLocales() {
  // Simular una llamada a API
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { 
      id: 1, 
      name: 'Teatro Municipal', 
      capacity: 500,
      image: '/img/teatro.png',
      description: 'Un espacio elegante y versátil para espectáculos de todo tipo.',
      address: 'Calle Mayor, 123',
    },
    { 
      id: 2, 
      name: 'Plaza Mayor', 
      capacity: 2000,
      image: '/img/plazamayor.png',
      description: 'El corazón de la ciudad, perfecto para eventos al aire libre.',
      address: 'Plaza Mayor, s/n',
    },
    { 
      id: 3, 
      name: 'Centro Cultural', 
      capacity: 300,
      image: '/img/centrocult.png',
      description: 'Un espacio moderno para exposiciones y conferencias.',
      address: 'Avenida de la Cultura, 45',
    },
    { 
      id: 4, 
      name: 'Auditorio', 
      capacity: 800,
      image: '/img/auditorio.png',
      description: 'Acústica perfecta para conciertos y grandes espectáculos.',
      address: 'Calle de la Música, 78',
    },
  ];
}

export default async function LocalesPage() {
  const locales = await getLocales();

  return (
    <div className="container">
      <h1 className="display-4 mb-4 text-center">Nuestros Espacios para Eventos</h1>
      <p className="lead text-center mb-5">Descubre los increíbles lugares donde se desarrollan nuestros eventos</p>
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {locales.map(local => (
          <div key={local.id} className="col">
            <div className="card h-100 shadow-sm">
              <Image 
                src={local.image} 
                alt={local.name} 
                width={300} 
                height={300} 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">{local.name}</h5>
                <p className="card-text">{local.description}</p>
                <ul className="list-unstyled">
                  <li><strong>Capacidad:</strong> {local.capacity} personas</li>
                  <li><strong>Dirección:</strong> {local.address}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}