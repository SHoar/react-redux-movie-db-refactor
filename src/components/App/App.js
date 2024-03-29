import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import HomeContainer from "../../containers/HomeContainer";
import MovieContainer from "../../containers/MovieContainer";
import NotFound from "../elements/NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomeContainer} exact />
        <Route path="/:movieId" component={MovieContainer} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
