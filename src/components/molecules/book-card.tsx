import { StyleSheet } from 'react-native';

import { BookCover } from '@/components/atoms/book-cover';
import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { Spacing } from '@/constants/theme';
import { getCover } from '@/features/books/repository';
import type { Livro } from '@/types/book';
import { formatDate } from '@/utils/format-date';

const COVER_WIDTH = 96;
const COVER_HEIGHT = 128;

// Última linha do card, conforme o status do livro.
function getStatusText(livro: Livro): string {
  if (livro.status === 'lido') {
    return `${'★'.repeat(livro.nota ?? 0)}${'☆'.repeat(5 - (livro.nota ?? 0))} · ${livro.paginas} páginas · lido em ${formatDate(livro.dataLeitura)}`;
  }
  if (livro.status === 'lendo') {
    return `Lendo · página ${livro.paginaAtual ?? 0} de ${livro.paginas}`;
  }
  return `Não lido · ${livro.paginas} páginas`;
}

// Card da Estante: título, capa logo abaixo do título e depois os detalhes.
export function BookCard({ livro }: { livro: Livro }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">{livro.titulo}</ThemedText>
      <BookCover
        titulo={livro.titulo}
        corIndice={livro.id}
        source={getCover(livro)}
        width={COVER_WIDTH}
        height={COVER_HEIGHT}
      />
      <ThemedText type="small" themeColor="textSecondary">
        {livro.autor} · {livro.genero}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {getStatusText(livro)}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.one,
  },
});
