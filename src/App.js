import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createServer } from "miragejs";

import { Landing } from "./pages/Landing";
import { FAQ } from "./pages/FAQ";
import { AboutUs } from "./pages/AboutUs";
import { Tombstones } from "./pages/Tombstones";

const server = createServer();
server.get("/api/tombstones", {
  tombstones: [
    {
      id: 1,
      img: "1.png",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 2,
      img: "2.png",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 3,
      img: "3.png",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 4,
      img: "4.png",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 5,
      img: "5.png",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 6,
      img: "6.jpg",
      title: "Tombstone",
      price: "8000Р",
    },
    {
      id: 7,
      img: "7.jpg",
      title: "Tombstone",
      price: "8000Р",
    },
  ],
});
server.post("/api/order", () => {});

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
