import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import StudentPage from "./pages/studentPage.tsx";
import ForumPage from "./pages/ForumPage.tsx";
import GroupsPage from "./pages/GroupsPage.tsx";
import DisciplinesPage from "./pages/DisciplinesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<LoginPage />,
    },
    {
        path: "aluno",
        element:<StudentPage />,
    },
    {
        path: "disciplinas",
        element:<DisciplinesPage />,
    },
    {
        path: "grupos",
        element:<GroupsPage />,
    },
    {
        path: "forum",
        element:<ForumPage />,
    }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
<RouterProvider router={router} /> 
);
