type ValidValueTypes = string | undefined | null | false
export const concat = (...values: ValidValueTypes[]) => {
  return values.filter(value => Boolean(value)).join(' ')
}
