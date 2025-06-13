import React from 'react';
import { View } from 'react-native';
import Elio from './assets/elio.svg';

const reviews = [
  {
    name: 'Simone ',
    image: 'elio.jpeg',
    stars: 5,
    description: 'Dario è un insegnante fantastico! Le sue lezioni sono sempre interessanti e coinvolgenti.',
  },
  
  // Puoi aggiungerne altre qui
];

const Profilo: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        padding: 16,
        fontFamily: 'sans-serif',
        boxSizing: 'border-box',
      }}
    >
    
      {/* AVATAR E NOME */}
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <View>
          <Elio width={120} height={120} />
        </View>
        <div
          style={{
            marginTop: 10,
            padding: '6px 12px',
            backgroundColor: '#efd7cd',
            borderRadius: 8,
            display: 'inline-block',
            fontWeight: 600,
            color: '#333',
          }}
        >
          700pt
        </div>
      </div>

      {/* BIOGRAFIA */}
      <div style={{ backgroundColor: '#f0e9e3', padding: 12, borderRadius: 8, marginTop: 20 }}>
        <strong style={{ color: '#9e938a' }}>Biografia</strong>
        <p style={{ marginTop: 6 }}>
          Ciao sono Elio! Sono un ex insegnante in pensione,amo leggere,amo raccontare storie e amo vivere la vita! Se hai bisogno di aiuto chiedi pure!
        </p>
      </div>

      {/* ANNUNCI */}
      <div style={{ backgroundColor: '#f0e9e3', padding: 12, borderRadius: 8, marginTop: 20 }}>
        <strong style={{ color: '#9e938a' }}>I miei annunci</strong>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, flexWrap: 'wrap' }}>
          {[
            { nome: 'Ripetizioni di italiano', img: '📘' },
            
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', fontSize: 12, width: '30%' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 4px',
                  fontSize: 24,
                }}
              >
                {item.img}
              </div>
              {item.nome}
            </div>
          ))}
        </div>
      </div>

      {/* RECENSIONI scrollabili */}
<div
  style={{
    backgroundColor: '#f0e9e3',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    maxHeight: 350, // altezza massima della sezione scrollabile
    overflowY: 'auto',
  }}
>
  {/* Header con media voto */}
  <div
    style={{
      textAlign: 'center',
      marginBottom: 16,
    }}
  >
    <strong style={{ color: '#9e938a' }}>Recensioni</strong>
    <div style={{ fontSize: 28, fontWeight: 'bold', margin: '8px 0' }}>5</div>
    <div style={{ color: '#f5b301', fontSize: 20 }}>
      ★ ★ ★ ★ ★
    </div>
  </div>

  {/* Lista recensioni */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    {reviews.map((review, idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 8,
          borderRadius: 10,
          border: '1px solid #d4c8ff',
        }}
      >
        <img
          src={review.image}
          alt={review.name}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginRight: 12,
            objectFit: 'cover',
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: 14 }}>{review.name}</div>
          <div style={{ fontSize: 18, color: '#f5b301' }}>
            {'★'.repeat(review.stars)}
            {'☆'.repeat(5 - review.stars)}
          </div>
          <p style={{ marginTop: 4, fontSize: 14, color: '#444' }}>
    {review.description}
  </p>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* MENU FISSO IN BASSO */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          maxWidth: 500,
          backgroundColor: '#fff',
          borderTop: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '12px 0',
        }}
      >
        <span>🏠</span>
        <span>👥</span>
        <span style={{ fontSize: 20 }}>＋</span>
        <span>🔔</span>
        <span style={{ backgroundColor: '#d6c1f4', padding: 8, borderRadius: '50%' }}>👤</span>
      </div>
    </div>
  );
};

export default Profilo;
