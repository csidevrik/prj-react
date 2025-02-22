import { useState, useEffect } from 'react';
import { Invoice } from '../types/invoice';

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lógica para cargar facturas
  
  return { invoices, loading, error };
}; 