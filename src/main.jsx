import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Portfolio from "./routes/Portfolio.jsx";
import AboutMe from "./routes/AboutMe.jsx";
import Trovebites from "./routes/Trovebites.jsx";
import IntraCore from "./routes/IntraCore.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Interests from "./routes/Interests.jsx";
import Kontakt from "./routes/Kontakt.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/trovebites",
        element: <Trovebites />,
      },
      {
        path: "/intracore",
        element: <IntraCore />,
      },
            {
        path: "/interests",
        element: <Interests />,
      },
      {
        path: "/kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
