import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {FAQ} from "./pages/FAQ";
import {AboutUs} from "./pages/AboutUs";

function App() {
  return (
      <Router>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" style={{ textDecoration: 'none' }}>
              <Landing />
            </Route>
            <Route exact path="/faq" style={{ textDecoration: 'none' }}>
              <FAQ qas={[{question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}, {question: 'Why?', answer: 'Because'}]} />
            </Route>
            <Route exact path="/about" style={{ textDecoration: 'none' }}>
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
