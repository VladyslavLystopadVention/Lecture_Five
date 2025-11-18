import { Route } from 'wouter';
import { Showcase } from './pages/Showcase';

const App = () => {

  return (
    <>
      <Route path='/showcase'>
          <Showcase />
      </Route>
    </>
  )
}

export default App
