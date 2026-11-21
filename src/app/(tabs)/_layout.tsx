import { Tabs } from 'expo-router/js-tabs';

import { Icon } from '@/components/atoms/icon';
import { NavBar } from '@/components/organisms/nav-bar';

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <NavBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <Icon name="inicio" themeColor={focused ? 'text' : 'textSecondary'} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Estante',
          tabBarIcon: ({ focused }) => (
            <Icon name="estante" themeColor={focused ? 'text' : 'textSecondary'} />
          ),
        }}
      />
    </Tabs>
  );
}
