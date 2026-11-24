import { Image, type ImageSource } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { BookCoverColors, BookCoverTextColor, Spacing } from '@/constants/theme';

type Props = {
  titulo: string;
  corIndice?: number; // normalmente o id do livro
  source?: ImageSource; // imagem da capa; sem ela aparece o quadrado colorido com o título
  width: number;
  height: number;
};

// Imagem de capa de um livro (só a imagem; título/autor ficam nos componentes que usam este).
export function BookCover({ titulo, corIndice = 0, source, width, height }: Props) {
  if (source) {
    return (
      <Image
        source={source}
        contentFit="cover"
        accessibilityLabel={`Capa de ${titulo}`}
        style={[styles.capa, { width, height }]}
      />
    );
  }

  return (
    <View
      style={[
        styles.capa,
        styles.reserva,
        { width, height, backgroundColor: BookCoverColors[corIndice % BookCoverColors.length] },
      ]}>
      <ThemedText type="smallBold" style={styles.titulo} numberOfLines={5}>
        {titulo}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  capa: {
    borderRadius: Spacing.two,
  },
  reserva: {
    padding: Spacing.two,
    justifyContent: 'flex-end',
  },
  titulo: {
    color: BookCoverTextColor,
  },
});
