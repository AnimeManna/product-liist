import React from "react";
import styles from "./App.module.css";
import Register from "../Register";
import Login from "../Login";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import PublicRoute from "../../components/PublicRoute";
import Home from "../Home";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Categories from "../Categories";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header left={null} right={null} />
      <Sidebar />
      <div className={styles.workSpace}>
        <Switch>
          <PublicRoute
            restricted={true}
            path="/register"
            component={Register}
          />
          <PublicRoute restricted={true} path="/login" component={Login} />
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PrivateRoute path="/auth" component={Home} />
          <PrivateRoute path="/categories" component={Categories} />
        </Switch>
      </div>
    </div>
  );
};
