import { BOOKS } from '@/features/books/repository';
import type { Livro } from '@/types/book';

// Gêneros que viram uma fileira na tela inicial (na ordem em que aparecem).
// Para criar uma seção nova: adicione o gênero aqui e livros com esse `genero` em books-data.ts.
export const GENRES = [
  'Ficção',
  'História',
  'Fantasia',
  'Romance',
  'Tecnologia',
  'Desenvolvimento pessoal',
];

/** Livros da seção "Novidades". */
export function listNewReleases(): Livro[] {
  return BOOKS.filter((book) => book.novidade);
}

/** Livros da seção "Originais". */
export function listOriginals(): Livro[] {
  return BOOKS.filter((book) => book.original);
}

/** Livros de um gênero (uma fileira da tela inicial). */
export function listByGenre(genre: string): Livro[] {
  return BOOKS.filter((book) => book.genero === genre);
}
