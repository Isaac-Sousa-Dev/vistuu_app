/**
 * Gera iniciais a partir de um nome para exibição (avatar).
 */
export function getInitialsFromDisplayName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    const a = parts[0]?.[0]
    const b = parts[1]?.[0]
    if (a && b) return (a + b).toUpperCase()
  }
  const one = parts[0] ?? ''
  if (one.length >= 2) return one.slice(0, 2).toUpperCase()
  return one[0]?.toUpperCase() ?? '?'
}
