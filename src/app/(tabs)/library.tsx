import { useState } from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { FilterChips } from '@/components/molecules/filter-chips';
import { SearchBar } from '@/components/molecules/search-bar';
import { BookList } from '@/components/organisms/book-list';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { listLibrary } from '@/features/library/repository';
import type { LibraryFilter } from '@/features/library/types';
import { useTheme } from '@/hooks/use-theme';

const FILTROS: { valor: LibraryFilter; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Marcar tudo' },
  { valor: 'lendo', rotulo: 'Lendo' },
  { valor: 'favoritos', rotulo: 'Favoritos' },
  { valor: 'nao-lido', rotulo: 'Não lido' },
];

// Tela ESTANTE (antiga "Consultas"): busca + filtros + lista de livros com capa.
export default function LibraryScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<LibraryFilter>('todos');

  const livros = listLibrary(filtro, busca);

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: Platform.OS === 'web' ? Spacing.six : insets.top + Spacing.three,
          paddingBottom: Spacing.four,
        },
      ]}
      keyboardShouldPersistTaps="handled">
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Estante</ThemedText>
        <ThemedText themeColor="textSecondary">
          {livros.length} {livros.length === 1 ? 'livro encontrado' : 'livros encontrados'}
        </ThemedText>

        <SearchBar value={busca} onChangeText={setBusca} />
        <FilterChips opcoes={FILTROS} valor={filtro} onChange={setFiltro} />

        <BookList livros={livros} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.three,
  },
});
