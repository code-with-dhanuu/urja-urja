import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from './View/Home/Home';
import {Career} from './View/Career/Career-Pooja';
import {Presence} from './View/Presence/Presence';
import Product from './View/Product/Productcard';
import About from './View/About/About';
import Catelogue from './View/Catelogue/Catelogue';
import Contact from './View/Contact/Contact';
import Investor from './View/Investor/Investor';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      
    },
    {
      path:'/career',
      element:<Career/>,
    },
    {
      path:'/Presence',
      element:<Presence/>
    },
    {
      path:'/Product',
      element:<Product/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Catelogue',
      element:<Catelogue/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    },
   {
    path:'/Investor',
    element:<Investor/>
   }
    
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

