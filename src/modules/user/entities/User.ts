import { v4 as uuidv4 } from 'uuid'

export class User {
  constructor(
    public nome: string,
    public idade: number,
    public cpf: number,
    public email: string,
    public id?: string
  ) {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}