export class InvalidCredentiasError extends Error {
  constructor() {
    super('Credenciais inválidas')
    this.name = 'InvalidCredentiasError'
  }
}