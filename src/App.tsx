import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filantrophy from "./app/filantrophy/views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Filantrophy />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
