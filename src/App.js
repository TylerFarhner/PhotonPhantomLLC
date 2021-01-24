import './App.css';

// ------switch and Route import-----
// import { Switch, Route, withRouter} from 'react-router-dom'

// component imports
import Header from './components/Header/Header'
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <Header />
      <DashboardPage />
    </div>
  );
}

export default (App);
