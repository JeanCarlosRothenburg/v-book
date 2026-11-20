import { FlatList, Platform, StyleSheet } from 'react-native';

import { LivroCapa } from '@/components/molecules/livro-capa';
import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { Spacing } from '@/constants/theme';
import type { Livro } from '@/data/livros';

type Props = {
  titulo: string;
  livros: Livro[];
};

// Uma seção da tela inicial: título + fileira de livros que rola para o lado.
export function SecaoLivros({ titulo, livros }: Props) {
  if (livros.length === 0) return null;

  return (
    <ThemedView style={styles.secao}>
      <ThemedText type="default" style={styles.titulo}>
        {titulo}
      </ThemedText>
      <FlatList
        data={livros}
        keyExtractor={(livro) => String(livro.id)}
        renderItem={({ item }) => <LivroCapa livro={item} />}
        horizontal
        // No navegador mostra a barra de rolagem, porque o mouse não "arrasta".
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
        contentContainerStyle={styles.fileira}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  secao: {
    gap: Spacing.two,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: Spacing.three,
  },
  fileira: {
    paddingHorizontal: Spacing.three,
    gap: Spacing.two,
  },
});
