import React, { data } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, { fakeAuth } from "./Login";
import "./App.css";

const Home = () => (
  <div>
    <center>
      <h2>Home</h2>
    </center>
  </div>
);

const Admin = () => {
  return (
    <div>
      <center>
        {" "}
        <h2>Welcome admin </h2>
      </center>
    </div>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} data={data} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          authed={fakeAuth.isAuthenticated}
          path="/admin"
          component={Admin}
        />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
};

export default App;
