import { StyleSheet } from 'react-native';

import { BookCover } from '@/components/atoms/book-cover';
import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { Spacing } from '@/constants/theme';
import { capaDoLivro } from '@/data/capas';
import { formatarData, type Livro } from '@/data/livros';

const CAPA_LARGURA = 96;
const CAPA_ALTURA = 128;

// Última linha do card, conforme o status do livro.
function textoDeStatus(livro: Livro): string {
  if (livro.status === 'lido') {
    return `${'★'.repeat(livro.nota ?? 0)}${'☆'.repeat(5 - (livro.nota ?? 0))} · ${livro.paginas} páginas · lido em ${formatarData(livro.dataLeitura)}`;
  }
  if (livro.status === 'lendo') {
    return `Lendo · página ${livro.paginaAtual ?? 0} de ${livro.paginas}`;
  }
  return `Não lido · ${livro.paginas} páginas`;
}

// Card da Estante: título, capa logo abaixo do título e depois os detalhes.
export function LivroCard({ livro }: { livro: Livro }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">{livro.titulo}</ThemedText>
      <BookCover
        titulo={livro.titulo}
        corIndice={livro.id}
        source={capaDoLivro(livro)}
        width={CAPA_LARGURA}
        height={CAPA_ALTURA}
      />
      <ThemedText type="small" themeColor="textSecondary">
        {livro.autor} · {livro.genero}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {textoDeStatus(livro)}
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
