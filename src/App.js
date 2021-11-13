import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AddService from './Components/AddService/AddService'
import Purchase from './Components/Purchase/Purchase';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ManageServices from './Components/ManageServices/ManageServices';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import Explore from './Components/Explore/Explore';
import Register from './Components/Register/Register';
import AddReview from './Components/AddReview/AddReview';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/explore">
              <Explore></Explore>
          </Route>
          <Route path="/addReview">
              <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/Purchase/:serviceId">
              <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/allorders">
              <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path='/addservice'>
              <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/manageServices'>
              <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
