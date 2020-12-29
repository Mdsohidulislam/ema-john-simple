import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {Link, Route,Switch} from 'react-router-dom';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';

const App=()=>{
  return (
    <div>  
      <Header></Header> 
      <Switch>
        <Route exact path='/shop'>
          <Shop/>
        </Route>
        <Route exact path='/review'>
          <Review/>
        </Route>
        <Route exact path='/inventory'>
          <Inventory/>
        </Route>
        <Route path='/details/:key' >
          <Details/>
        </Route>
        <Route exact path='/' >
          <Shop/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      {/* <h1>Hi, I am md sohidul islam. I am from Bangladesh</h1> */}
    </div>
  )
}

export default App;