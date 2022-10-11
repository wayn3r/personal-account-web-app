export class ServerValidationError extends Error {
  constructor(public readonly errors: string[]) {
    super('Errors: \n' + errors.join('\n'))
  }
}
