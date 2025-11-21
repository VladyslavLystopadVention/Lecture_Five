import { Redirect, Route, Switch } from 'wouter';
import { Showcase } from './pages/Showcase';
import { PetsOwners } from './pages/PetsOwners';

const App = () => {

  return (
    <Switch>
      <Route path="/showcase" component={Showcase} />
      <Route path="/pets" component={PetsOwners} />

      <Redirect to="/showcase" />
    </Switch>
  )
}

export default App;
