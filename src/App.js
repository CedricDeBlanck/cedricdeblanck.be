import { Home, Aboutme, Portfolio } from './app/pages';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { BaseLayout } from './app/layouts';
import { RouteWithLayout } from './app/utilities';
import * as Routes from './app/routes';
import './app/_sass/_index.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Redirect from={Routes.LANDING} to={Routes.HOME} />
              <RouteWithLayout exact path={Routes.HOME} layout={ BaseLayout } component = { Home }></RouteWithLayout>
              <RouteWithLayout exact path={Routes.ABOUTME} layout={ BaseLayout } component = { Aboutme }></RouteWithLayout>
              <RouteWithLayout exact path={Routes.PORTFOLIO} layout={ BaseLayout } component = { Portfolio }></RouteWithLayout>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
