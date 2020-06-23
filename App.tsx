import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import config from "./config";

const App = () => {
  const { defaults, routes } = config;
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          const { layout: Layout, component: Component, path } = route;
          return route.isLayout ? (
            <Route exact path={path} key={index}>
              <Layout config={defaults.layoutConfig}>
                <Component API={{ ...route.API, baseUrl: defaults.baseUrl }} />
              </Layout>
            </Route>
          ) : (
            <Route
              exact
              path={path}
              component={() => (
                <Component API={{ ...route.API, baseUrl: defaults.baseUrl }} />
              )}
              key={index}
            />
          );
        })}
        <Route exact path="*" component={defaults.defaultComponent} />
      </Switch>
    </Router>
  );
};

export default App;
