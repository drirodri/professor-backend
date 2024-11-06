export class Student {
  constructor(
    readonly name: string,
    readonly id: string,
    readonly status: string,
    readonly classCodeList: string[],
  ) {}
}
