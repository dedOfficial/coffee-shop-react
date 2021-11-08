import { Switch, Route } from 'react-router-dom';
import appStyle from './App.module.css';
import routes from '../../routes';

function App() {
  return (
    <div className={appStyle.app}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
