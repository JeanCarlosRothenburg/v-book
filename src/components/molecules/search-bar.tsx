import { StyleSheet, TextInput } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  value: string;
  onChangeText: (texto: string) => void;
  placeholder?: string;
};

// Campo de busca (mesmo visual que a tela de consultas já tinha).
export function SearchBar({ value, onChangeText, placeholder = 'Buscar por título ou autor' }: Props) {
  const theme = useTheme();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.textSecondary}
      style={[styles.input, { color: theme.text, backgroundColor: theme.backgroundElement }]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    fontSize: 16,
  },
});
