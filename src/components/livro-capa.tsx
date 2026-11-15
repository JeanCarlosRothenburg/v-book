import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import type { Livro } from '@/data/livros';

// Tamanho de cada "quadrado" de livro. Mude aqui para deixar maior ou menor.
export const CAPA_LARGURA = 120;
export const CAPA_ALTURA = 150;

// Sem imagens de capa por enquanto: cada livro ganha uma cor (pelo id) com o título em cima.
const CORES = ['#3B5BDB', '#C2255C', '#2B8A3E', '#E8590C', '#7048E8', '#0C8599', '#B08800', '#862E9C'];

type Props = {
  livro: Livro;
  onPress?: () => void; // ainda não há tela de detalhe; fica pronto para quando houver
};

export function LivroCapa({ livro, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <View style={[styles.capa, { backgroundColor: CORES[livro.id % CORES.length] }]}>
        <ThemedText type="smallBold" style={styles.titulo} numberOfLines={5}>
          {livro.titulo}
        </ThemedText>
      </View>
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
  capa: {
    width: CAPA_LARGURA,
    height: CAPA_ALTURA,
    borderRadius: Spacing.two,
    padding: Spacing.two,
    justifyContent: 'flex-end',
  },
  titulo: {
    color: '#FFFFFF',
  },
});
