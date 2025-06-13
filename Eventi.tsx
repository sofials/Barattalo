import React from 'react';
import './Eventi.css';

const sezioni = [
  {
    titolo: '📚 Libri e Lettura',
    eventi: [
      { titolo: 'Shakespeare in Love', immagine: require('./images/The_Complete_Plays_In_One_Sitting.webp') },
      { titolo: 'Letture per Giovani', immagine: require('./images/download.jpg') },
      { titolo: 'Horror in Prima Linea', immagine: require('./images/download-1.jpg') },
    ],
  },
  {
    titolo: '🍷 Degustazioni',
    eventi: [
      { titolo: 'Birre Venete Artigianali', immagine: require('./images/download-2.jpg') },
      { titolo: 'Formaggi di Capra', immagine: require('./images/images.jpg') },
      { titolo: 'Grappa per Tutti!', immagine: require('./images/images-1.jpg') },
    ],
  },
  {
    titolo: '🎬 Film e Cinema',
    eventi: [
      { titolo: 'Western', immagine: require('./images/images-2.jpg') },
      { titolo: 'Dario Argento', immagine: require('./images/download-4.jpg') },
      { titolo: 'Cuori Bollenti', immagine: require('./images/download-5.jpg') },
    ],
  },
];

const Eventi: React.FC = () => {
  return (
    <main className="eventi-container">
      {sezioni.map((sezione, idx) => (
        <section key={idx} className="evento-sezione">
          <h2>{sezione.titolo}</h2>
          <ul className="lista-eventi">
            {sezione.eventi.map((evento, i) => (
              <li key={i} className="evento-item">
                <img
                  src={evento.immagine}
                  alt={evento.titolo}
                  className="evento-img"
                />
                <span className="evento-testo">{evento.titolo}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default Eventi;
