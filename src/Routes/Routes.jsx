import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'instructors',
        element: <Instructors/>
      },
      {
        path: 'classes',
        element: <Classes/>
      },
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      {
        path: 'user-home',
        element: <UserHome></UserHome>
      },
      {
        path: 'selected-classes',
        element: <SelectedClasses/>
      },
      {
        path: 'enrolled-classes',
        element: <EnrolledClasses/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
    ]
  },
]);

export default router;