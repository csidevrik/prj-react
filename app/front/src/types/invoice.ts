export interface Cliente {
  id: string;
  nombre: string;
  email: string;
}

export interface Factura {
  id: string;
  clienteId: string;
  monto: number;
  estado: 'pendiente' | 'pagada' | 'cancelada';
  fechaEmision: Date;
}

export interface Invoice {
  id: string;
  date: Date;
  amount: number;
  client: string;
  // ... más propiedades
}

export type InvoiceStatus = 'pending' | 'paid' | 'cancelled'; 