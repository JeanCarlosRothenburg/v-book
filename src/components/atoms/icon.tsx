import { SymbolView } from 'expo-symbols';

import type { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// Ícones usados no app. Para criar um novo: adicione aqui o nome do símbolo em cada plataforma
// (iOS = SF Symbols; Android/web = Material Symbols).
const SIMBOLOS = {
  configuracoes: { ios: 'gearshape', android: 'settings', web: 'settings' },
  notificacoes: { ios: 'bell', android: 'notifications', web: 'notifications' },
  inicio: { ios: 'house', android: 'home', web: 'home' },
  estante: { ios: 'books.vertical', android: 'library_books', web: 'library_books' },
} as const;

export type IconName = keyof typeof SIMBOLOS;

type Props = {
  name: IconName;
  size?: number;
  themeColor?: ThemeColor;
};

export function Icon({ name, size = 24, themeColor = 'text' }: Props) {
  const theme = useTheme();

  return <SymbolView name={SIMBOLOS[name]} size={size} tintColor={theme[themeColor]} />;
}
