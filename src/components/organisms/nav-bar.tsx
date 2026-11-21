import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { StyleSheet, View } from 'react-native';

import { ThemedView } from '@/components/atoms/themed-view';
import { NavItem } from '@/components/molecules/nav-item';
import { MaxContentWidth, Spacing } from '@/constants/theme';

// Barra de navegação por abas. É passada em `tabBar` do <Tabs> (src/app/(tabs)/_layout.tsx);
// rótulo e ícone de cada item vêm das `options` de cada <Tabs.Screen>.
export function NavBar({ state, descriptors, emitter, navigateToTab, insets }: BottomTabBarProps) {
  return (
    <ThemedView
      type="backgroundElement"
      style={[styles.bar, { paddingBottom: insets.bottom, paddingHorizontal: insets.left }]}>
      <View role="tablist" style={styles.items}>
        {state.routes.map((route, index) => {
          const focused = index === state.index;
          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : (options.title ?? route.name);

          const onPress = () => {
            const event = emitter.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigateToTab(route.key);
            }
          };

          const onLongPress = () => {
            emitter.emit({ type: 'tabLongPress', target: route.key });
          };

          return (
            <NavItem
              key={route.key}
              label={label}
              icon={options.tabBarIcon?.({ focused, color: '', size: 24 })}
              focused={focused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    paddingTop: Spacing.one,
  },
  items: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: MaxContentWidth,
  },
});
