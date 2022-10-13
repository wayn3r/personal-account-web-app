export class Pagination {
  public readonly page: number
  public readonly totalPages: number
  public readonly count: number
  public readonly totalCount: number
  public readonly querySize: number

  private constructor(attrs: {
    page: number
    totalPages: number
    count: number
    totalCount: number
    querySize: number
  }) {
    this.page = attrs.page
    this.totalPages = attrs.totalPages
    this.count = attrs.count
    this.totalCount = attrs.totalCount
    this.querySize = attrs.querySize
  }

  public static load(attrs: {
    page: number
    totalPages: number
    count: number
    totalCount: number
    querySize: number
  }): Pagination {
    return new Pagination(attrs)
  }
}
