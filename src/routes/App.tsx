import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "../app/filantrophy/views";
import Donate from "../app/filantrophy/views/Donate";
import History from "../app/filantrophy/views/history/History";
import HistoryDetail from "../app/filantrophy/views/history/HistoryDetail";
import News from "../app/filantrophy/views/news/News";
import FilantrophyProfile from "../app/filantrophy/views/profile/FilantrophyProfile";
import Login from "../app/auth/views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
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
  },
  {
    path: "/filantrophy/news",
    element: <News />
  },
  {
    path: "/filantrophy/profile",
    element: <FilantrophyProfile />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
