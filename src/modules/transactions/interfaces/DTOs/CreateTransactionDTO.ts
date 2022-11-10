export type CreateTransactionDTO = {
  titulo: string
  value: number
  tipo: 'income' | 'outcome'
  user: string 
}