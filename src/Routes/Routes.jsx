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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
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
        element: <Instructors />
      },
      {
        path: 'classes',
        element: <Classes />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: 'user-home',
        element: <UserHome></UserHome>
      },
      {
        path: 'selected-classes',
        element: <SelectedClasses />
      },
      {
        path: 'enrolled-classes',
        element: <EnrolledClasses />
      },
      {
        path: 'payment/:classId',
        element: <Payment />
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      },
      {
        path: 'admin-home',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'manage-classes',
        element: <AdminRoute><ManageClasses/></AdminRoute>
      },
      {
        path: 'feedback/:id',
        element: <AdminRoute><Feedback/></AdminRoute>
      },
      {
        path: 'instructor-home',
        element: <InstructorRoute><InstructorHome /></InstructorRoute>
      },
      {
        path: 'add-class',
        element: <InstructorRoute><AddAClass /></InstructorRoute>
      },
      {
        path: 'my-classes',
        element: <InstructorRoute><MyClasses /></InstructorRoute>
      },
    ]
  },
]);

export default router;