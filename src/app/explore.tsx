import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LivroCard } from '@/components/livro-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { buscarLivros } from '@/data/livros';
import { useTheme } from '@/hooks/use-theme';

// Tela de CONSULTAS: lista todos os livros lidos.
export default function ConsultasScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [busca, setBusca] = useState('');

  const livros = buscarLivros(busca);

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

        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Buscar por título ou autor"
          placeholderTextColor={theme.textSecondary}
          style={[
            styles.input,
            { color: theme.text, backgroundColor: theme.backgroundElement },
          ]}
        />

        {livros.map((livro) => (
          <LivroCard key={livro.id} livro={livro} />
        ))}

        {livros.length === 0 && (
          <ThemedText themeColor="textSecondary">Nenhum livro encontrado.</ThemedText>
        )}
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
  input: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    fontSize: 16,
  },
});
