import Invoice from '../models/Invoice';
import InvoiceRepository from '../repositories/InvoicesRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'expense';
}

class CreateInvoiceService {
  private invoiceRepository: InvoiceRepository;

  constructor(invoiceRepository: InvoiceRepository) {
    this.invoiceRepository = invoiceRepository;
  }

  public execute({ title, value, type }: Request): Invoice {
    const invoice = this.invoiceRepository.create({ title, value, type });

    return invoice;
  }
}

export default CreateInvoiceService;
