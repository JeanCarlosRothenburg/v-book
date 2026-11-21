import type { ImageSource } from 'expo-image';

// Modelo de livro compartilhado entre as features (home, library...).
// Os nomes dos campos seguem o contrato com o back descrito no README.
export type Livro = {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  paginas: number;
  status?: 'lendo' | 'lido'; // sem status = ainda não leu
  paginaAtual?: number; // só para livros 'lendo'
  nota?: number; // 1 a 5, só para livros 'lido'
  dataLeitura?: string; // AAAA-MM-DD (data em que terminou de ler), só para 'lido'
  novidade?: boolean; // aparece na seção "Novidades" da tela inicial
  original?: boolean; // aparece na seção "Originais" da tela inicial
  favorito?: boolean; // marcado como favorito (filtro "Favoritos" da Estante)
  capa?: ImageSource; // imagem da capa; se vier vazia usa a provisória de features/books/repository/local/covers.ts
};
