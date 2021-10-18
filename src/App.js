
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Covid from './components/Covid/Covid';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFund from './components/PageNotFund/PageNotFund';
import Product from './components/Product/Product';
import TopSellingProduct from './components/TopSellingProduct/TopSellingProduct';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/product">
            <Product></Product>
          </Route>
          <Route exact path="/topProduct">
            <TopSellingProduct></TopSellingProduct>
          </Route>
          <Route exact path="/covid">
            <Covid></Covid>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <PageNotFund></PageNotFund>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
