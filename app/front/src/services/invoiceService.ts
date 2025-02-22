import { Factura } from '../types/invoice';
import { API_ENDPOINTS } from '../constants';

export const invoiceService = {
  async getFacturas(): Promise<Factura[]> {
    const response = await fetch(API_ENDPOINTS.FACTURAS);
    return response.json();
  },

  async getFactura(id: string): Promise<Factura> {
    const response = await fetch(`${API_ENDPOINTS.FACTURAS}/${id}`);
    return response.json();
  }
}; 