import { BOOKS } from '@/features/books/repository';
import type { LibraryFilter } from '@/features/library/types';
import type { Livro } from '@/types/book';

// Minúsculas e sem acentos, para a busca ignorar os dois.
const normalize = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** Livros que estão sendo lidos agora. */
export function listReading(): Livro[] {
  return BOOKS.filter((book) => book.status === 'lendo');
}

/** Todos os livros lidos, do mais recente para o mais antigo. */
export function listRead(): Livro[] {
  return BOOKS.filter((book) => book.status === 'lido').sort((a, b) =>
    (b.dataLeitura ?? '').localeCompare(a.dataLeitura ?? ''),
  );
}

/** Filtra os livros lidos por título ou autor (ignora maiúsculas e acentos). */
export function searchRead(text: string): Livro[] {
  const term = normalize(text.trim());
  const books = listRead();
  if (!term) return books;
  return books.filter(
    (book) => normalize(book.titulo).includes(term) || normalize(book.autor).includes(term),
  );
}

/** Números de resumo da leitura. */
export function getReadingSummary() {
  const read = listRead();
  const total = read.length;
  const pages = read.reduce((sum, book) => sum + book.paginas, 0);
  const averageRating = total ? read.reduce((sum, book) => sum + (book.nota ?? 0), 0) / total : 0;
  return { total, pages, averageRating, reading: listReading().length };
}

/**
 * Livros da Estante: filtro (chips) + busca por título/autor (ignora maiúsculas e acentos).
 * Ordem: lendo, lidos (mais recente primeiro) e não lidos (por título).
 */
export function listLibrary(filter: LibraryFilter, text = ''): Livro[] {
  const term = normalize(text.trim());
  const order = (book: Livro) => (book.status === 'lendo' ? 0 : book.status === 'lido' ? 1 : 2);

  return BOOKS.filter((book) => {
    if (filter === 'lendo' && book.status !== 'lendo') return false;
    if (filter === 'favoritos' && !book.favorito) return false;
    if (filter === 'nao-lido' && book.status) return false;
    return !term || normalize(book.titulo).includes(term) || normalize(book.autor).includes(term);
  }).sort(
    (a, b) =>
      order(a) - order(b) ||
      (order(a) === 1
        ? (b.dataLeitura ?? '').localeCompare(a.dataLeitura ?? '')
        : a.titulo.localeCompare(b.titulo)),
  );
}
