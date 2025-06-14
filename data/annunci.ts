import { Annuncio } from './types';
import { autori } from './autori';

export const annunci: Annuncio[] = [
  {
    id: '1',
    titolo: 'Cucino un pranzo',
    descrizione: 'Sono un ex chef che vuole cucinare i tuoi piatti preferiti.',
    immagine: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    autore: autori[0],
    categoria: 'Cucina',
  },
  {
    id: '2',
    titolo: 'Lezioni di Chitarra',
    descrizione: 'Lezioni per principianti e intermedi.',
    immagine: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    autore: autori[1],
    categoria: 'Lezioni',
  },
];