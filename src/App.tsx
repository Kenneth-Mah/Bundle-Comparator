import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./pages/Games";
import AddGame from "./pages/AddGame";
import ViewGame from "./pages/ViewGame";
import AddBundle from "./pages/AddBundle";

const router = createBrowserRouter([
  { path: "/", element: <Games /> },
  { path: "/add-game", element: <AddGame /> },
  { path: "/games/:id", element: <ViewGame /> },
  { path: "/games/:id/add-bundle", element: <AddBundle /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
