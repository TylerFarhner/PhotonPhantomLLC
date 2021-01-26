import './App.css';

// ------switch and Route import-----
import { Switch, Route, withRouter} from 'react-router-dom'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// PAGES
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';

function App(props) {
  return (
    <div className="App">
        <Header />
          <Switch>
            <Route exact path ='/' render={props => <DashboardPage />} />
            <Route exact path ='/Contact' render={props => <ContactPage />} />
            <Route exact path ='/Gallery' render={props => <GalleryPage />} />
            <Route exact path ='/Reviews' render={props => <ReviewsPage />} />
          </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);

