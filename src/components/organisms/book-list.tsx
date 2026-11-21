import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { BookCard } from '@/components/molecules/book-card';
import { Spacing } from '@/constants/theme';
import type { Livro } from '@/types/book';

// Lista vertical de livros (tela Estante) com a mensagem de lista vazia.
export function BookList({ livros }: { livros: Livro[] }) {
  return (
    <ThemedView style={styles.lista}>
      {livros.map((livro) => (
        <BookCard key={livro.id} livro={livro} />
      ))}

      {livros.length === 0 && (
        <ThemedText themeColor="textSecondary">Nenhum livro encontrado.</ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: Spacing.three,
  },
});
