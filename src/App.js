import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <Router>
        <p>nav goes here</p>
        <Route exact path='/products/:handle'>
          <ProductPage />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <p>footer goes here</p>
      </Router>
    </div>
  );
}

export default App;
