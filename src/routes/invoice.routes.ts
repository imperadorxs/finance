import { Router } from 'express';
import InvoiceRepository from '../repositories/InvoicesRepository';
import CreateInvoiceService from '../services/CreateInvoiceService';

const invoiceRouter = Router();
const invoiceRepository = new InvoiceRepository();

invoiceRouter.get('/', (request, response) => {
  const invoices = invoiceRepository.all();
  return response.json(invoices);
});

invoiceRouter.post('/', (request, response) => {
  const { title, value, type } = request.body;
  const createInvoice = new CreateInvoiceService(invoiceRepository);

  const invoice = createInvoice.execute({ title, value, type });

  return response.json(invoice);
});

export default invoiceRouter;
