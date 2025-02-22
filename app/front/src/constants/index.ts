export const API_ENDPOINTS = {
  FACTURAS: '/api/facturas',
  CLIENTES: '/api/clientes',
} as const;

export const ESTADOS_FACTURA = {
  PENDIENTE: 'pending',
  PAGADA: 'paid',
  CANCELADA: 'cancelled',
} as const; 