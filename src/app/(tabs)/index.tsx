import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/atoms/themed-view';
import { BookSection } from '@/components/organisms/book-section';
import { TopBar } from '@/components/organisms/top-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { GENRES, listByGenre, listNewReleases, listOriginals } from '@/features/home/repository';
import { useTheme } from '@/hooks/use-theme';

// Tela INICIAL: seções (Novidades, Originais e uma por gênero), cada uma com uma
// fileira de livros que rola para o lado.
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  // Ações do topo. Ainda não existem as telas de configurações e de notificações:
  // quando existirem, troque os corpos abaixo por `router.push('/configuracoes')` etc.
  const abrirConfiguracoes = () => {
    // TODO: navegar para a tela de configurações
  };
  const abrirNotificacoes = () => {
    // TODO: navegar para a tela de notificações
  };

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: Platform.OS === 'web' ? Spacing.six : insets.top + Spacing.three,
          paddingBottom: Spacing.four,
        },
      ]}>
      <ThemedView style={styles.container}>
        <TopBar
          titulo="Início"
          onPressConfiguracoes={abrirConfiguracoes}
          onPressNotificacoes={abrirNotificacoes}
        />

        <BookSection titulo="Novidades" livros={listNewReleases()} />
        <BookSection titulo="Originais" livros={listOriginals()} />

        {/* Uma seção para cada gênero da lista GENRES (src/features/home/repository) */}
        {GENRES.map((genero) => (
          <BookSection key={genero} titulo={genero} livros={listByGenre(genero)} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
  },
});
