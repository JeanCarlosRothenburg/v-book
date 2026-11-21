import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  rotulo: string;
  selecionado?: boolean;
  onPress?: () => void;
};

// Botão de filtro (chip). Selecionado = cores invertidas (texto vira o fundo).
export function FilterChip({ rotulo, selecionado = false, onPress }: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: selecionado }}
      style={({ pressed }) => [
        styles.chip,
        { backgroundColor: selecionado ? theme.text : theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <ThemedText
        type="smallBold"
        style={{ color: selecionado ? theme.background : theme.text }}>
        {rotulo}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.four,
  },
  pressed: {
    opacity: 0.7,
  },
});
