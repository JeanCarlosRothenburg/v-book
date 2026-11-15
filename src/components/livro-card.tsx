import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { formatarData, type Livro } from '@/data/livros';

export function LivroCard({ livro }: { livro: Livro }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">{livro.titulo}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {livro.autor} · {livro.genero}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {'★'.repeat(livro.nota ?? 0)}
        {'☆'.repeat(5 - (livro.nota ?? 0))} · {livro.paginas} páginas · lido em{' '}
        {formatarData(livro.dataLeitura)}
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
