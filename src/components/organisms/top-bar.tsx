import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/atoms/themed-text';
import { IconButton } from '@/components/molecules/icon-button';
import { Spacing } from '@/constants/theme';

type Props = {
  titulo: string;
  onPressConfiguracoes?: () => void; // engrenagem
  onPressNotificacoes?: () => void; // sino
};

// Barra do topo das telas: título à esquerda, engrenagem e sino à direita.
export function TopBar({ titulo, onPressConfiguracoes, onPressNotificacoes }: Props) {
  return (
    <View style={styles.barra}>
      <ThemedText type="subtitle">{titulo}</ThemedText>
      <View style={styles.acoes}>
        <IconButton icon="configuracoes" label="Configurações" onPress={onPressConfiguracoes} />
        <IconButton icon="notificacoes" label="Notificações" onPress={onPressNotificacoes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
  },
  acoes: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
});
