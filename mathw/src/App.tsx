import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Topic from './pages/Topic';
import PropositionalLogic from './pages/PropositionalLogic';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/topic/:topicId" element={<Topic />} />
            <Route path="/topic/propositional-logic" element={<PropositionalLogic />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 