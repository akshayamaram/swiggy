
import React from 'react';
import ReactDOM  from 'react-dom/client';
import JSX from 'react/jsx-dev-runtime';
import Header from './components/Header';
import Hero from './components/Hero';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';
import Cart from './components/Cart';


const AppLayout = () => {
    return (
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />{" "}
          {/* Outlet will be filled with the children acc to the path on what route we are on */}
        </div>
      </Provider>
    );
}

/* creating routes */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); 