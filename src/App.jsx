
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./RootLayOut";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
  )
);


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App