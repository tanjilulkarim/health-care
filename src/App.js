
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Covid from './components/Covid/Covid';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFund from './components/PageNotFund/PageNotFund';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignUp from './components/SignUp/SignUp';
import TopSellingProduct from './components/TopSellingProduct/TopSellingProduct';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <AuthProvider>
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
          <Route path="/productDetails/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <PrivateRoute exact path="/topProduct">
            <TopSellingProduct></TopSellingProduct>
          </PrivateRoute>
          <Route exact path="/covid">
            <Covid></Covid>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <PageNotFund></PageNotFund>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
