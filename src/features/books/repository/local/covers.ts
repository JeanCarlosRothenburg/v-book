import type { ImageSource } from 'expo-image';

import type { Livro } from '@/types/book';

// Capas PROVISÓRIAS (geradas, uma por id) enquanto não há as imagens reais.
// Para trocar: substitua o arquivo em assets/images/capas/ ou preencha `capa` no livro
// (quando o banco entregar a URL: capa: { uri: 'https://...' }).
const CAPAS: Record<number, ImageSource> = {
  1: require('@/assets/images/capas/capa-1.png'),
  2: require('@/assets/images/capas/capa-2.png'),
  3: require('@/assets/images/capas/capa-3.png'),
  4: require('@/assets/images/capas/capa-4.png'),
  5: require('@/assets/images/capas/capa-5.png'),
  6: require('@/assets/images/capas/capa-6.png'),
  7: require('@/assets/images/capas/capa-7.png'),
  8: require('@/assets/images/capas/capa-8.png'),
  9: require('@/assets/images/capas/capa-9.png'),
  10: require('@/assets/images/capas/capa-10.png'),
  11: require('@/assets/images/capas/capa-11.png'),
  12: require('@/assets/images/capas/capa-12.png'),
  13: require('@/assets/images/capas/capa-13.png'),
  14: require('@/assets/images/capas/capa-14.png'),
  15: require('@/assets/images/capas/capa-15.png'),
  16: require('@/assets/images/capas/capa-16.png'),
  17: require('@/assets/images/capas/capa-17.png'),
  18: require('@/assets/images/capas/capa-18.png'),
  19: require('@/assets/images/capas/capa-19.png'),
  20: require('@/assets/images/capas/capa-20.png'),
  21: require('@/assets/images/capas/capa-21.png'),
  22: require('@/assets/images/capas/capa-22.png'),
  23: require('@/assets/images/capas/capa-23.png'),
  24: require('@/assets/images/capas/capa-24.png'),
  25: require('@/assets/images/capas/capa-25.png'),
  26: require('@/assets/images/capas/capa-26.png'),
  27: require('@/assets/images/capas/capa-27.png'),
  28: require('@/assets/images/capas/capa-28.png'),
  29: require('@/assets/images/capas/capa-29.png'),
  30: require('@/assets/images/capas/capa-30.png'),
  31: require('@/assets/images/capas/capa-31.png'),
  32: require('@/assets/images/capas/capa-32.png'),
  33: require('@/assets/images/capas/capa-33.png'),
  34: require('@/assets/images/capas/capa-34.png'),
};

/** Capa do livro: a do próprio livro (`capa`) ou, se não tiver, a provisória pelo id. */
export function getCover(livro: Livro): ImageSource | undefined {
  return livro.capa ?? CAPAS[livro.id];
}
