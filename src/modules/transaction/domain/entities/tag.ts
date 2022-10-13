export class Tag {
  public readonly id: string
  public readonly name: string

  protected constructor(attrs: { id: string; name: string }) {
    this.id = attrs.id
    this.name = attrs.name
  }
}
