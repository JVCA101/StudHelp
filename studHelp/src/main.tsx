import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentPage from "./pages/StudentPage.tsx";
import ForumPage from "./pages/ForumPage.tsx";
import GroupsPage from "./pages/GroupsPage.tsx";
import DisciplinesPage from "./pages/DisciplinesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { Provider } from "react-redux";
import store from "../store.ts";
import AdminPage from "./pages/AdminPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "aluno",
    element: <StudentPage />,
  },
  {
    path: "disciplinas",
    element: <DisciplinesPage />,
  },
  {
    path: "grupos",
    element: <GroupsPage />,
  },
  {
    path: "forum",
    element: <ForumPage />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
