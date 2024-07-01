import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "../app/filantrophy/views";
import Donate from "../app/filantrophy/views/Donate";
import History from "../app/filantrophy/views/history/History";
import HistoryDetail from "../app/filantrophy/views/history/HistoryDetail";
import News from "../app/filantrophy/views/news/News";
import FilantrophyProfile from "../app/filantrophy/views/profile/FilantrophyProfile";
import Login from "../app/auth/views/Login";
import Merchant from "../app/merchant/views/Merchant";
import MerchantAddFood from "../app/merchant/views/MerchantAddFood";
import Community from "../app/community/views/Community";
import MerchantHistory from "../app/merchant/views/MerchantHistory";
import MerchantProfile from "../app/merchant/views/MerchantProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AddReceiver from "../app/community/views/AddReceiver";
import ReceiverList from "../app/community/views/ReceiverList";
import CommunityProfile from "../app/community/views/CommunityProfile";
import ReceiverResgistry from "../app/community/views/ReceiverResgistry";

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
  },
  {
    path: "/merchant",
    element: <Merchant />
  },
  {
    path: "/merchant/add",
    element: <MerchantAddFood />
  },
  {
    path: "/merchant/history",
    element: <MerchantHistory />
  },
  {
    path: "/merchant/profile",
    element: <MerchantProfile />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/community/receiver",
    element: <ReceiverList />
  },
  {
    path: "/community/profile",
    element: <CommunityProfile />
  },
  {
    path: "/community/add",
    element: <AddReceiver />
  },
  {
    path: "/community/receiver/register",
    element: <ReceiverResgistry />
  }
])

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </>
  )
}

export default App;
