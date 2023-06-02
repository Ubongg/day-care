import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddChild from "./pages/AddChild";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Child from "./pages/Child";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import EditChild from "./pages/EditChild";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<PrivateRoute />}>
        <Route index element={<Profile />} />
      </Route>
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="add-kid" element={<AddChild />} />
      <Route path="edit-kid/:kidId" element={<EditChild />} />
      <Route path="kid/:kidId" element={<Child />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="team" element={<Team />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetails />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
