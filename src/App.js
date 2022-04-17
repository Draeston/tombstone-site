import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import makeServer from "./functions/makeServer";

import { Landing } from "./pages/Landing";
import { FAQ } from "./pages/FAQ";
import { AboutUs } from "./pages/AboutUs";
import { Tombstones } from "./pages/Tombstones";

makeServer();

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li className="nav-logo">TOMBSTONES</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tombstones">Tombstones</Link>
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
          <Route exact path="/" style={{ textDecoration: "none" }}>
            <Landing />
          </Route>
          <Route exact path="/tombstones" style={{ textDecoration: "none" }}>
            <Tombstones />
          </Route>
          <Route exact path="/faq" style={{ textDecoration: "none" }}>
            <FAQ
              qas={[
                {
                  question: "What are you doing here??",
                  answer:
                    "This site is designed to sell custom tombstone designs. " +
                    "Just imagine how sad it would be if your tombstone will not show your artistic and aesthetic preferences. With " +
                    "our site, you would not have to worry about all that stuff and may enjoy your afterlife with the tombstone of your choice.",
                },
                {
                  question: "Is it a real tombstone?",
                  answer:
                    "Yes, it does not get more real than ours! Buying from us, you will get a first class marble tombstone.",
                },
                {
                  question: "Can you deliver it to my place??",
                  answer: "Yes, as long as you will pay for it!",
                },
                {
                  question: "And what if I change my mind?",
                  answer:
                    "For that, you will get a 5% discount on a new tombstone design. However, we " +
                    "are working on a subscription model where you could" +
                    " pay every month and have your tombstone design ready for you to pass away.",
                },
              ]}
            />
          </Route>
          <Route exact path="/about" style={{ textDecoration: "none" }}>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
