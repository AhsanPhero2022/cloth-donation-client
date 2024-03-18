import DashboardLayout from '../components/layout/DashboardLayout';
import ProtectedRout from '../components/layout/ProtectedRout';
import AllProducts from '../components/products/AllProducts';
import Donate from '../components/products/Donate';
import ShowDetails from '../components/products/ShowDetails';
import GratitudePost from '../pages/Gratitude/GratitudePost';
import AllWinterClothes from '../pages/dashboard/AllWinterClothes';
import CreateTestimonial from '../pages/dashboard/CreateTestimonial';
import Dashboard from '../pages/dashboard/Dashboard';
import LeaderBoard from '../pages/dashboard/LeaderBoard';
import UpdateClothes from '../pages/dashboard/UpdateClothes';
import AboutUs from '../pages/home/AboutUs';
import Home from '../pages/home/Home';
import Login from '../pages/register/Login';
import Register from '../pages/register/Register';
import CreateVolunteers from '../pages/volunteers/CreateVolunteers';
import App from './../App';


import {createBrowserRouter} from "react-router-dom";
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'winter-clothes',
          element: <AllProducts/>
        },
        {
          path: 'community',
          element: <GratitudePost/>
        },
        {
          path: 'aboutUs',
          element: <AboutUs/>
        },
        {
          path: 'volunteer',
          element: <CreateVolunteers/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: 'showDetails/:_id',
          element: <ShowDetails/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          index: true,
          element: <ProtectedRout>
            <Dashboard/>
          </ProtectedRout>
        },
        {
          path: 'create-winter-clothes',
          element: <Donate/>
        },
        {
          path: 'allWinterClothes',
          element: <AllWinterClothes/>
        },
        {
          path: 'updateClothes/:id',
          element: <UpdateClothes/>
        },
        {
          path: 'leader-board',
          element: <LeaderBoard/>
        },
        {
          path: 'create-testimonial',
          element: <CreateTestimonial/>
        }
      ]
    },
   
    
  ]);