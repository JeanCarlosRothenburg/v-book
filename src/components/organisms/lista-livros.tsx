import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { LivroCard } from '@/components/molecules/livro-card';
import { Spacing } from '@/constants/theme';
import type { Livro } from '@/data/livros';

// Lista vertical de livros (tela Estante) com a mensagem de lista vazia.
export function ListaLivros({ livros }: { livros: Livro[] }) {
  return (
    <ThemedView style={styles.lista}>
      {livros.map((livro) => (
        <LivroCard key={livro.id} livro={livro} />
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
