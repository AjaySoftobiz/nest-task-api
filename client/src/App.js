import { Route, Switch } from 'react-router';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/:id' component={Profile} />
    </Switch>
  );
}

export default App;
