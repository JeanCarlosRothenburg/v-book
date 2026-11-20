import { StyleSheet, View } from 'react-native';

import { FilterChip } from '@/components/atoms/filter-chip';
import { Spacing } from '@/constants/theme';

type Opcao<T extends string> = { valor: T; rotulo: string };

type Props<T extends string> = {
  opcoes: Opcao<T>[];
  valor: T; // opção selecionada (uma por vez)
  onChange: (valor: T) => void;
};

// Fileira de chips de filtro; quebra de linha se não couber na tela.
export function FilterChips<T extends string>({ opcoes, valor, onChange }: Props<T>) {
  return (
    <View style={styles.fileira}>
      {opcoes.map((opcao) => (
        <FilterChip
          key={opcao.valor}
          rotulo={opcao.rotulo}
          selecionado={opcao.valor === valor}
          onPress={() => onChange(opcao.valor)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fileira: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
});
