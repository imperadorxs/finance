import Invoice from '../models/Invoice';

interface Balance {
  incomes: number;
  expenses: number;
  total: number;
}

interface Total {
  invoices: Invoice[];
  balance: Balance;
}

class InvoicesRepository {
  private invoices: Invoice[];

  private incomes = 0;

  private expenses = 0;

  constructor() {
    this.invoices = [];
  }

  public all(): Total {
    return {
      invoices: this.invoices,
      balance: this.balance(),
    };
  }

  public balance(): Balance {
    this.incomes = this.invoices
      .filter(invoice => invoice.type === 'income')
      .reduce((acumulator, invoice) => acumulator + invoice.value, 0);

    this.expenses = this.invoices
      .filter(invoice => invoice.type === 'expense')
      .reduce((acumulator, invoice) => acumulator + invoice.value, 0);

    const balance = {
      incomes: this.incomes,
      expenses: this.expenses,
      total: this.incomes - this.expenses,
    };

    return balance;
  }

  public create({ title, type, value }: Omit<Invoice, 'id'>): Invoice {
    const invoice = new Invoice({ title, type, value });

    this.invoices.push(invoice);
    return invoice;
  }
}

export default InvoicesRepository;
