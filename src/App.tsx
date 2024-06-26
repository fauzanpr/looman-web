import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "./app/filantrophy/views";
import Donate from "./app/filantrophy/views/Donate";

const router = createBrowserRouter([
  {
    path: "/filantrophy",
    element: <Filantrophy />,
  },
  {
    path: "/filantrophy/donate",
    element: <Donate />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
