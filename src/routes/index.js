import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../applications/Home";
import Recommend from "../applications/Recommend";
import Singers from "../applications/Singers";
import Rank from "../applications/Rank";
import Album from "../applications/Album";

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
            element: <Album />
          }
        ]
      },
      { path: "singers", element: <Singers /> },
      {
        path: "rank/*",
        element: <Rank />,
        children: [
          {
            path: ":id",
            element: <Album />
          }
        ]
      },
      // Not found routes work as you'd expect
      { path: "*", element: <Navigate to="/recommend" /> }
    ]
  }
];

export default routes;
