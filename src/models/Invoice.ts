import { v4 as uuid } from 'uuid';

class Invoice {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'expense';

  constructor({ title, value, type }: Omit<Invoice, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Invoice;
