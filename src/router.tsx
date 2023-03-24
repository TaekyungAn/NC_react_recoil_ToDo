import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ToDoList from "./components/ToDo/ToDoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todolist",
        element: <ToDoList />,
      },
    ],
  },
]);
