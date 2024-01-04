// import "./App.css";
// import conf from "./conf/conf";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import authSlice from "./store/authSlice";
// import { login, logout } from "./store/authSlice";
// import auth from "./appwrite/auth";
// import {Footer,Header} from './components'

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login(userData));
//       }else{
//         dispatch(logout());
//       }
//     })// add catch to imporve the code
//     .finally(()=> setLoading(false))
//   }, []);
//   return !loading ? (
//     <div className="min-h-screen flex flex-wrap
//     content-between bg-gray-400">
//       <div className="w-full block">
//         <Header />
//         <main>
//           {/* <Outlet /> */}
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null;
// }

// export default App;


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
