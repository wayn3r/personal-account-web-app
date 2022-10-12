export const camelCaseStyles = (
  styles: Record<string, string>
): Record<string, string> => {
  const camelCaseStyles: Record<string, string> = {}

  for (const key in styles) {
    const newKey = key.replace(/\-\w/g, l => l.toUpperCase().replace('-', ''))
    camelCaseStyles[newKey] = styles[key]
  }

  return camelCaseStyles
}
