import { v4 as uuidv4 } from 'uuid'

export class Transaction {
  constructor(
    public titulo: string,
    public value: number,
    public tipo: 'income' | 'outcome',
    public user: string,
    private id?: string
  ) {
    if(!this.id) {
      this.id = uuidv4()
    }
  }  
}