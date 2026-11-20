import { useState } from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/atoms/themed-text';
import { ThemedView } from '@/components/atoms/themed-view';
import { FilterChips } from '@/components/molecules/filter-chips';
import { SearchBar } from '@/components/molecules/search-bar';
import { ListaLivros } from '@/components/organisms/lista-livros';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { listarEstante, type FiltroEstante } from '@/data/livros';
import { useTheme } from '@/hooks/use-theme';

const FILTROS: { valor: FiltroEstante; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Marcar tudo' },
  { valor: 'lendo', rotulo: 'Lendo' },
  { valor: 'favoritos', rotulo: 'Favoritos' },
  { valor: 'nao-lido', rotulo: 'Não lido' },
];

// Tela ESTANTE (antiga "Consultas"): busca + filtros + lista de livros com capa.
export default function EstanteScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<FiltroEstante>('todos');

  const livros = listarEstante(filtro, busca);

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: Platform.OS === 'web' ? Spacing.six : insets.top + Spacing.three,
          paddingBottom: insets.bottom + BottomTabInset + Spacing.four,
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

        <ListaLivros livros={livros} />
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
