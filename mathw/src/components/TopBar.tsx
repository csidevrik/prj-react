import Breadcrumb from './Breadcrumb';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <Breadcrumb />
    </div>
  );
}

export default TopBar;