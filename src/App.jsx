import React, { useDebugValue, useEffect } from "react";
import { Button } from "./components/ui/button";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Activity from "./pages/acitivty/Activity";
import Wallet from "./pages/wallet/Wallet";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import PaymentDetails from "./pages/Payment Details/PaymentDetails";
import StockDetails from "./pages/Stock Details/StockDetails";
import Watchlist from "./pages/Watchlist/Watchlist";
import Profile from "./pages/Profile/Profile";
import SearchCoin from "./pages/Search/SearchCoin";
import Notfound from "./pages/Not Found/Notfound";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Store/Auth/Action";

const App = () => {

  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();

useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
}, [auth.jwt, dispatch]);
  console.log("auth ,,,,",auth);


  return (
  <>
    {auth.user? <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/market/:id" element={<StockDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCoin />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>:<Auth/>}
  </>
);
};

export default App;
