import "./App.css";
import conf from "./conf/conf";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authSlice from "./store/authSlice";
import { login, logout } from "./store/authSlice";
import auth from "./appwrite/auth";
import {Footer,Header} from './components'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData));
      }else{
        dispatch(logout());
      }
    })// add catch to imporve the code
    .finally(()=> setLoading(false))
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap
    content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;



