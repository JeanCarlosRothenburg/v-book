// Dados FICTÍCIOS só para teste do front.
// Quando o banco do Jean ficar pronto, o repository `remote` passa a buscar estes dados
// na API e este arquivo deixa de ser usado.

import type { Livro } from '@/types/book';

export const BOOKS: Livro[] = [
  // --- Ficção ---
  { id: 1, titulo: '1984', autor: 'George Orwell', genero: 'Ficção', paginas: 328, status: 'lido', nota: 5, dataLeitura: '2026-08-30', novidade: true, favorito: true },
  { id: 2, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', genero: 'Ficção', paginas: 152, status: 'lido', nota: 4, dataLeitura: '2026-06-21' },
  { id: 3, titulo: 'Duna', autor: 'Frank Herbert', genero: 'Ficção', paginas: 680, status: 'lendo', paginaAtual: 245, favorito: true },
  { id: 4, titulo: 'O Alquimista', autor: 'Paulo Coelho', genero: 'Ficção', paginas: 208, status: 'lido', nota: 3, dataLeitura: '2026-05-09' },
  { id: 5, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', genero: 'Ficção', paginas: 216, original: true },
  { id: 6, titulo: 'Admirável Mundo Novo', autor: 'Aldous Huxley', genero: 'Ficção', paginas: 312 },
  { id: 7, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', genero: 'Ficção', paginas: 96, status: 'lido', nota: 4, dataLeitura: '2026-08-02' },

  // --- História ---
  { id: 8, titulo: 'Sapiens', autor: 'Yuval Noah Harari', genero: 'História', paginas: 464, status: 'lendo', paginaAtual: 120, novidade: true },
  { id: 9, titulo: 'Armas, Germes e Aço', autor: 'Jared Diamond', genero: 'História', paginas: 472 },
  { id: 10, titulo: 'Os Sertões', autor: 'Euclides da Cunha', genero: 'História', paginas: 560, original: true },
  { id: 11, titulo: '1808', autor: 'Laurentino Gomes', genero: 'História', paginas: 400 },
  { id: 12, titulo: 'Brasil: Uma Biografia', autor: 'Lilia Schwarcz', genero: 'História', paginas: 786 },
  { id: 13, titulo: 'SPQR', autor: 'Mary Beard', genero: 'História', paginas: 608 },

  // --- Fantasia ---
  { id: 14, titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', genero: 'Fantasia', paginas: 310, status: 'lido', nota: 5, dataLeitura: '2026-10-05', original: true, favorito: true },
  { id: 15, titulo: 'A Sociedade do Anel', autor: 'J. R. R. Tolkien', genero: 'Fantasia', paginas: 576 },
  { id: 16, titulo: 'A Guerra dos Tronos', autor: 'George R. R. Martin', genero: 'Fantasia', paginas: 592, novidade: true },
  { id: 17, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J. K. Rowling', genero: 'Fantasia', paginas: 264 },
  { id: 18, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', genero: 'Fantasia', paginas: 656 },
  { id: 19, titulo: 'O Leão, a Feiticeira e o Guarda-Roupa', autor: 'C. S. Lewis', genero: 'Fantasia', paginas: 208 },

  // --- Romance ---
  { id: 20, titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Romance', paginas: 256, status: 'lido', nota: 5, dataLeitura: '2026-10-28', favorito: true },
  { id: 21, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', genero: 'Romance', paginas: 424, original: true },
  { id: 22, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', genero: 'Romance', paginas: 240 },
  { id: 23, titulo: 'Capitães da Areia', autor: 'Jorge Amado', genero: 'Romance', paginas: 280 },
  { id: 24, titulo: 'Jane Eyre', autor: 'Charlotte Brontë', genero: 'Romance', paginas: 592, novidade: true },

  // --- Tecnologia ---
  { id: 25, titulo: 'Código Limpo', autor: 'Robert C. Martin', genero: 'Tecnologia', paginas: 425, status: 'lido', nota: 4, dataLeitura: '2026-09-18' },
  { id: 26, titulo: 'O Programador Pragmático', autor: 'Andrew Hunt', genero: 'Tecnologia', paginas: 352 },
  { id: 27, titulo: 'Arquitetura Limpa', autor: 'Robert C. Martin', genero: 'Tecnologia', paginas: 432, novidade: true, favorito: true },
  { id: 28, titulo: 'Refatoração', autor: 'Martin Fowler', genero: 'Tecnologia', paginas: 448 },
  { id: 29, titulo: 'Designing Data-Intensive Applications', autor: 'Martin Kleppmann', genero: 'Tecnologia', paginas: 616, original: true },

  // --- Desenvolvimento pessoal ---
  { id: 30, titulo: 'Hábitos Atômicos', autor: 'James Clear', genero: 'Desenvolvimento pessoal', paginas: 320, status: 'lido', nota: 4, dataLeitura: '2026-07-14' },
  { id: 31, titulo: 'O Poder do Hábito', autor: 'Charles Duhigg', genero: 'Desenvolvimento pessoal', paginas: 408 },
  { id: 32, titulo: 'Mindset', autor: 'Carol Dweck', genero: 'Desenvolvimento pessoal', paginas: 312 },
  { id: 33, titulo: 'Essencialismo', autor: 'Greg McKeown', genero: 'Desenvolvimento pessoal', paginas: 272, novidade: true },
  { id: 34, titulo: 'Comece pelo Porquê', autor: 'Simon Sinek', genero: 'Desenvolvimento pessoal', paginas: 256 },
];
