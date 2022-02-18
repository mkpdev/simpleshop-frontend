import "bootstrap/dist/css/bootstrap.min.css";
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Regions from "./components/Regions";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import ProductDetails from "./components/ProductDetails";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import BuyNow from "./components/BuyNow";

function App() {
  const token = useSelector(state => state.token.token)


  function PrivateRoute({ children }) {
    return token ? children : <Navigate to="/" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regions" element={
            <PrivateRoute>
              <Regions />
            </PrivateRoute>} />
          <Route path="/products" element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>} />
          <Route path="/productdetail/:id" element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>} />
          <Route path="/orders" element={
            <PrivateRoute><Orders />
            </PrivateRoute>} />
          <Route path="/logout" element={
            <PrivateRoute><LogOut />
            </PrivateRoute>} />
          <Route path="/orders" element={
            <PrivateRoute><Orders />
            </PrivateRoute>} />
          <Route path="/buynow" element={
            <PrivateRoute><BuyNow />
            </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
