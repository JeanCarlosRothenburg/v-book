import { Pressable, StyleSheet } from 'react-native';

import { Icon, type IconName } from '@/components/atoms/icon';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  icon: IconName;
  label: string; // texto lido por leitores de tela
  onPress?: () => void;
};

// Botão redondo só com ícone (engrenagem, sino...).
export function IconButton({ icon, label, onPress }: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={Spacing.two}
      style={({ pressed }) => [
        styles.botao,
        { backgroundColor: theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <Icon name={icon} size={22} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
