import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout/BaseLayout';
import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
import './styles/App.css';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
