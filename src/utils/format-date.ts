/** '2026-10-28' -> '28/10/2026' */
export function formatDate(iso?: string): string {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  return `${day}/${month}/${year}`;
}
