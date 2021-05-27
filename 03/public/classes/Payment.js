export class Payment {
    constructor(recipient, details, amount //this only works if i have the access modifiers (readonly, private, public)
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `
          ${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
