import { Redirect, Route } from 'wouter';
import { Showcase } from './pages/Showcase';

const App = () => {

  return (
    <>
      <Route path='/showcase'>
          <Showcase />
      </Route>

      <Route>
          <Redirect to='/showcase' />
      </Route>
    </>
  )
}

export default App
