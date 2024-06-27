import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "./app/filantrophy/views";
import Donate from "./app/filantrophy/views/Donate";
import History from "./app/filantrophy/views/History";

const router = createBrowserRouter([
  {
    path: "/filantrophy",
    element: <Filantrophy />,
  },
  {
    path: "/filantrophy/donate",
    element: <Donate />
  },
  {
    path: "/filantrophy/history",
    element: <History />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
