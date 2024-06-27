import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "./app/filantrophy/views";
import Donate from "./app/filantrophy/views/Donate";
import History from "./app/filantrophy/views/history/History";
import HistoryDetail from "./app/filantrophy/views/history/HistoryDetail";

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
  },
  {
    path: "/filantrophy/history/:historyId",
    element: <HistoryDetail />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
