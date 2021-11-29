import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Album from "../application/Album";
import Singer from "../application/Singer";
import Search from "../application/Search";

const routes = [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "", element: <Navigate to="/recommend" /> },
      {
        path: "recommend/*",
        element: <Recommend />,
        children: [
          {
            path: ":id",
            element: <Album />,
          },
        ],
      },
      {
        path: "singers/*",
        element: <Singers />,
        routes: [
          {
            path: "/singers/:id",
            component: Singer,
          },
        ],
      },
      {
        path: "rank/*",
        element: <Rank />,
        children: [
          {
            path: ":id",
            element: <Album />,
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
      // Not found routes work as you'd expect
      { path: "*", element: <Navigate to="/recommend" /> },
    ],
  },
];

export default routes;
