import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import Home from "../application/Home";
const RecommendComponent = lazy(() => import("../application/Recommend/"));
const SingersComponent = lazy(() => import("../application/Singers/"));
const RankComponent = lazy(() => import("../application/Rank/"));
const AlbumComponent = lazy(() => import("../application/Album/"));
const SingerComponent = lazy(() => import("./../application/Singer/"));
const SearchComponent = lazy(() => import("./../application/Search/"));

const SuspenseComponent = (Component) => {
  return (
    <Suspense fallback={null}>
      <Component/>
    </Suspense>
  );
};

const routes = [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "", element: <Navigate to="/recommend" /> },
      {
        path: "recommend/*",
        element: (
          <Suspense fallback={null}>
            <RecommendComponent />
          </Suspense>
        ),
        children: [
          {
            path: ":id",
            element: SuspenseComponent(AlbumComponent),
          },
        ],
      },
      {
        path: "singers/*",
        element: SuspenseComponent(SingersComponent),
        routes: [
          {
            path: "/singers/:id",
            component: SuspenseComponent(SingerComponent),
          },
        ],
      },
      {
        path: "rank/*",
        element: SuspenseComponent(RankComponent),
        children: [
          {
            path: ":id",
            element: SuspenseComponent(AlbumComponent),
          },
        ],
      },
      {
        path: "/search",
        element: SuspenseComponent(SearchComponent),
      },
      {
        path: "album/:id",
        element: SuspenseComponent(AlbumComponent),
      },
      // Not found routes work as you'd expect
      { path: "*", element: <Navigate to="/recommend" /> },
    ],
  },
];

export default routes;
