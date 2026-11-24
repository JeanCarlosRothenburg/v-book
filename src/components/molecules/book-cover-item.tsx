import { Pressable, StyleSheet } from 'react-native';

import { BookCover } from '@/components/atoms/book-cover';
import { ThemedText } from '@/components/atoms/themed-text';
import { Spacing } from '@/constants/theme';
import { getCover } from '@/features/books/repository';
import type { Livro } from '@/types/book';

// Tamanho de cada "quadrado" de livro. Mude aqui para deixar maior ou menor.
export const COVER_WIDTH = 120;
export const COVER_HEIGHT = 150;

type Props = {
  livro: Livro;
  onPress?: () => void; // ainda não há tela de detalhe; fica pronto para quando houver
};

// Item da fileira da tela inicial: imagem da capa + autor embaixo.
export function BookCoverItem({ livro, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <BookCover
        titulo={livro.titulo}
        corIndice={livro.id}
        source={getCover(livro)}
        width={COVER_WIDTH}
        height={COVER_HEIGHT}
      />
      <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
        {livro.autor}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: COVER_WIDTH,
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.7,
  },
});
