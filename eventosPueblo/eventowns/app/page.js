import Carousel from './component/CarouselClient';
import Link from 'next/link';

async function getEvents() {

  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: 'Concierto de Rock', date: '2023-07-15' },
    { id: 2, title: 'Festival de Cine', date: '2023-07-20' },
    { id: 3, title: 'Feria de Artesanía', date: '2023-07-25' },
  ];
}

export default async function Home() {
  const events = await getEvents();

  return (
    <div>
      <h1 className="display-4 mb-4">Bienvenido a Eventown</h1>
      <Carousel />
      <h2 className="mt-4 mb-3">Próximos Eventos</h2>
      <div className="list-group">
        {events.map(event => (
          <Link key={event.id} href={`/eventos/${event.id}`} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{event.title}</h5>
              <small>{event.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}