import type { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { Spacing } from '@/constants/theme';

type Props = {
  label: string;
  icon: ReactNode;
  focused: boolean;
  onPress: () => void;
  onLongPress?: () => void;
};

// Um item da barra de navegação: ícone + rótulo. O destaque vem do estado `focused` (NavBar).
export function NavItem({ label, icon, focused, onPress, onLongPress }: Props) {
  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={label}
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      {icon}
      <ThemedText type="small" themeColor={focused ? 'text' : 'textSecondary'}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.half,
    paddingVertical: Spacing.two,
  },
  pressed: {
    opacity: 0.7,
  },
});
