import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { Gehege } from "./pages/gehege";
import { Personal } from "./pages/personal";
import { Finanzen } from "./pages/finanzen";
import { Verkaufsstände } from "./pages/verkaufsstände";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import backgroundImage from "./assets/zoo.jpeg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/gehege",
        element: <Gehege />,
      },
      {
        path: "/personal",
        element: <Personal />,
      },
      {
        path: "/finanzen",
        element: <Finanzen />,
      },
      {
        path: "/verkaufsstaende",
        element: <Verkaufsstände />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div
        className="flex min-h-screen items-center justify-center bg-blue-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="h-[90vh] w-full max-w-7xl bg-cover bg-center p-4 shadow-lg">
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  </StrictMode>,
);
