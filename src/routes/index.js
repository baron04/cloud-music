import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../applications/Home";
import Recommend from "../applications/Recommend";
import Singers from "../applications/Singers";
import Rank from "../applications/Rank";

export default [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "recommend", element: <Recommend /> },
      { path: "singers", element: <Singers /> },
      { path: "rank", element: <Rank /> },
      // Not found routes work as you'd expect
      { path: "*", element: <Navigate to="/recommend" /> },
    ],
  },
];
