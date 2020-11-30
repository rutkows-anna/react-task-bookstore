import Nav from "./components/Nav/Nav";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path={routes.books} component={Books} />
          <Route path={routes.cart} component={Cart} />
          <Route path={routes.form} component={Form} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
