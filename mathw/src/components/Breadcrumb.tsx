import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const breadcrumbMap: { [key: string]: string } = {
    'propositional-logic': 'Lógica Proposicional',
    'algebra': 'Álgebra',
    'calculus': 'Cálculo',
    'geometry': 'Geometría',
    'trigonometry': 'Trigonometría',
    'probability': 'Probabilidad',
    'statistics': 'Estadística',
    'linear-algebra': 'Álgebra Lineal',
    'discrete-mathematics': 'Matemática Discreta',
    'number-theory': 'Teoría de Números'
  };

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">MathWiki</Link>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const displayName = breadcrumbMap[segment] || segment;
        
        return (
          <span key={path}>
            <span className="breadcrumb-separator">/</span>
            <Link to={path} className="breadcrumb-item">
              {displayName}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb; 