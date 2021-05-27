import { HasFormatter } from '../interface/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number //this only works if i have the access modifiers (readonly, private, public)
  ) {}

  format() {
    return `
          ${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
