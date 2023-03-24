import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Private from "./components/pages/Private";
import LeftBar from "./components/SideBar/LeftBar";

function Router() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Router;
