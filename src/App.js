import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import PaymentInsurance from "./components/pages/PaymentInsurance";
// import MainNav from "./components/layout/MainNav";
// import Footer from "./components/layout/Footer";
import Thanks from './components/pages/Thanks'
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login/PrivateRoute";
// import UpdateProfile from "./components/login/UpdateProfile";
import ForgotPassword from './components/login/ForgotPassword'
import LogHome from './components/pages/AuthPages/LogHome'
import LogServices from './components/pages/AuthPages/LogServices'
import LogAbout from './components/pages/AuthPages/LogAbout'
import LogPaymentInsurance from './components/pages/AuthPages/LogPaymentInsurance'
import LogThanks from './components/pages/AuthPages/LogThanks'
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/payment" component={PaymentInsurance} />
          <Route path="/thanks" component={Thanks} />


          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />


          <PrivateRoute path='/lh' component={LogHome} />
          <PrivateRoute path='/ls' component={LogServices} />
          <PrivateRoute path='/la' component={LogAbout} />
          <PrivateRoute path='/lp' component={LogPaymentInsurance} />
          <PrivateRoute path='/lt' component={LogThanks} />
        </Switch>
        {/* </AuthProvider> */}
      </Router>
    </>
  );
}

export default App;
