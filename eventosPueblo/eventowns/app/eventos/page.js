import Link from 'next/link';
import Image from 'next/image';

async function getEvents() {
  // Simular una llamada a API
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { 
      id: 1, 
      title: 'Concierto de Rock', 
      date: '2023-07-15', 
      image: '/img/carousel1.jpg',
      description: 'Disfruta de una noche llena de energía con las mejores bandas de rock de la región.',
      location: 'Estadio Municipal',
      price: '25€',
      capacity: 5000,
      organizer: 'RockTown Producciones'
    },
    { 
      id: 2, 
      title: 'Festival de Cine', 
      date: '2023-07-20', 
      image: '/img/evento4.jpeg',
      description: 'Sumérgete en el séptimo arte con una selección de películas internacionales y locales.',
      location: 'Teatro Principal',
      price: '10€',
      capacity: 500,
      organizer: 'Asociación de Cinéfilos de Eventown'
    },
    { 
      id: 3, 
      title: 'Feria de Artesanía', 
      date: '2023-07-25', 
      image: '/img/evento2.jpeg',
      description: 'Descubre la riqueza de nuestra artesanía local en esta feria llena de color y tradición.',
      location: 'Plaza Mayor',
      price: 'Entrada libre',
      capacity: 'Sin límite',
      organizer: 'Gremio de Artesanos de Eventown'
    },
    { 
      id: 4, 
      title: 'Exposición de Arte', 
      date: '2023-08-01', 
      image: '/img/evento5.jpeg',
      description: 'Explora las últimas tendencias en arte contemporáneo con artistas locales e internacionales.',
      location: 'Galería de Arte Moderna',
      price: '8€',
      capacity: 200,
      organizer: 'Fundación Artística de Eventown'
    },
  ];
}

export default async function EventosPage() {
    const events = await getEvents();
  
    return (
      <div>
        <h1 className="display-4 mb-4">Todos los Eventos</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {events.map(event => (
            <div key={event.id} className="col">
              <div className="card h-100">
                <Image src={event.image} alt={event.title} width={400} height={300} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text"><small className="text-muted">{event.date}</small></p>
                  <p className="card-text">{event.description}</p>
                  <Link href={`/eventos/${event.id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }