import { Home, Profile, SignIn, SignUp } from "pages";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

const Routes = () => {
  const routes = [
    {
      name: "home",
      path: "/",
      element: <Home />,
    },
    {
      name: "profile",
      path: "/profile",
      element: <Profile />,
    },
    {
      name: "Sign In",
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      name: "Sign Up",
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ];

  const router = createBrowserRouter([...routes]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
