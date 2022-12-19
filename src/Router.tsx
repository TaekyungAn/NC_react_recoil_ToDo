import { createBrowserRouter } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
  },
]);
export default router;
