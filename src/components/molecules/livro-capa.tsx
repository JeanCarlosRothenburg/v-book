import { Pressable, StyleSheet } from 'react-native';

import { BookCover } from '@/components/atoms/book-cover';
import { ThemedText } from '@/components/atoms/themed-text';
import { Spacing } from '@/constants/theme';
import { capaDoLivro } from '@/data/capas';
import type { Livro } from '@/data/livros';

// Tamanho de cada "quadrado" de livro. Mude aqui para deixar maior ou menor.
export const CAPA_LARGURA = 120;
export const CAPA_ALTURA = 150;

type Props = {
  livro: Livro;
  onPress?: () => void; // ainda não há tela de detalhe; fica pronto para quando houver
};

// Item da fileira da tela inicial: imagem da capa + autor embaixo.
export function LivroCapa({ livro, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <BookCover
        titulo={livro.titulo}
        corIndice={livro.id}
        source={capaDoLivro(livro)}
        width={CAPA_LARGURA}
        height={CAPA_ALTURA}
      />
      <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
        {livro.autor}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: CAPA_LARGURA,
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.7,
  },
});
