export interface Autore {
  id: string;
  nome: string;
  avatar: string;
  bio: string;
  rating: number;
};

export interface Annuncio {
  id: string;
  titolo: string;
  descrizione: string;
  immagine: string;
  autore: Autore;
  categoria: string;
};

export type RootStackParamList = {
  Autore: { autore: Autore};
  Annuncio: { annuncio: Annuncio };
};