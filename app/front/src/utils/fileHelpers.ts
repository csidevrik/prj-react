// Mover las funciones de manejo de archivos aquí
export const getFileIcon = (fileType: string) => {
  const types: { [key: string]: string } = {
    'application/pdf': '📄',
    'application/xml': '📋',
    'application/json': '{ }',
    'text/csv': '📊',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '📑',
    'application/vnd.ms-excel': '📑',
  };

  const fileExtension = fileType.split('/').pop()?.toLowerCase();
  if (fileExtension === 'xml') return '📋';
  if (fileExtension === 'json') return '{ }';
  if (fileExtension === 'csv') return '📊';
  if (fileExtension === 'xlsx' || fileExtension === 'xls') return '📑';

  return types[fileType] || '📁';
};

export const getFileColor = (fileType: string) => {
  const types: { [key: string]: string } = {
    'application/pdf': '#e53935',    // Rojo
    'application/xml': '#1976d2',    // Azul
    'application/json': '#f57c00',   // Naranja
    'text/csv': '#388e3c',          // Verde
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '#7b1fa2', // Morado
    'application/vnd.ms-excel': '#7b1fa2',
  };

  const fileExtension = fileType.split('/').pop()?.toLowerCase();
  if (fileExtension === 'xml') return '#1976d2';
  if (fileExtension === 'json') return '#f57c00';
  if (fileExtension === 'csv') return '#388e3c';
  if (fileExtension === 'xlsx' || fileExtension === 'xls') return '#7b1fa2';

  return types[fileType] || '#757575';
}; 