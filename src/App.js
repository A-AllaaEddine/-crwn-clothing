import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1><br/>
    <button onClick={() => props.history.push('/hats/color')}>Click Me</button>
    <Link to ='/hats/color'>go to colors</Link>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
 