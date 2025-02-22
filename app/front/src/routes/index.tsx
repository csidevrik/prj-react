import { RouteObject } from 'react-router-dom';
import Invoices from '../components/pages/Invoices/Invoices';
import Home from '../components/pages/Home/Home';
import InvoiceDetail from '../components/pages/Invoices/InvoiceDetail';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/facturas',
    element: <Invoices />,
    children: [
      {
        path: ':id', // /facturas/123
        element: <InvoiceDetail />
      }
    ]
  }
]; 