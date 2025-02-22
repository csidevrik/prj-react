import { FC } from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetail: FC = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Detalle de Factura {id}</h2>
    </div>
  );
};

export default InvoiceDetail; 