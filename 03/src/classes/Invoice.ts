import { HasFormatter } from '../interface/HasFormatter';

export class Invoice implements HasFormatter {
  //  readonly client: string; //readonly we can access it and read it but cannot modify it
  //  private details: string; //private you cannot access or access it outside of the class
  //  public amount: number; //public you can change it or modify it

  //  constructor(c: string, d: string, a: number) {
  //    this.client = c;
  //    this.details = d;
  //    this.amount = a;
  //  }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number //this only works if i have the access modifiers (readonly, private, public)
  ) {}

  format() {
    return `
          ${this.client} owes £${this.amount} for ${this.details}`;
  }
}
