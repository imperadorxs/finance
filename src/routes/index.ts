import { Router } from 'express';
import invoiceRouter from './invoice.routes';

const routes = Router();

routes.use('/invoices', invoiceRouter);

export default routes;
