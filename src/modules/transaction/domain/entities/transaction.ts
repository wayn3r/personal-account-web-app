import { Tag } from './tag'

export class Transaction {
  public readonly id: string
  public readonly name: string
  public readonly description?: string
  public readonly amount: number
  public readonly currency: string
  public readonly type: string
  public readonly account: string
  public readonly tags: Tag[]
  public readonly date: Date
  public readonly createdAt: Date

  protected constructor(attrs: {
    id: string
    name: string
    description?: string
    amount: number
    currency: string
    type: string
    account: string
    tags: Tag[]
    date: Date
    createdAt: Date
  }) {
    this.id = attrs.id
    this.name = attrs.name
    this.description = attrs.description
    this.amount = attrs.amount
    this.currency = attrs.currency
    this.type = attrs.type
    this.account = attrs.account
    this.tags = attrs.tags
    this.date = attrs.date
    this.createdAt = attrs.createdAt
  }
}
