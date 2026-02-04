import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Alerts from "../pages/Alerts";
import Feed from "../pages/Feed";
import Landing from "../pages/Landing";
import MyPage from "../pages/MyPage";
import Studio from "../pages/Studio";
import Map from "../pages/Map";
import Post from "../pages/Post";
import CreateStudio from "../pages/CreateStudio";

const requireAuth = async () => {
  const isLoggedIn = Boolean(localStorage.getItem("login"));
  // 나중에 await fetch("/me") 등 처리
  if (!isLoggedIn) {
    throw redirect("/landing");
  }
  return null;
};

// @todo 타투이스트인지 확인
// const requireArtist = async () => {
//   const user = getUser();
//   if (user.role !== "ARTIST") {
//     throw redirect("/");
//   }
//   return null;
// };

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/",
    loader: requireAuth,
    element: <Layout />,
    // errorElement: <GlobalError />, //@todo error boundary 추가
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "settings",
        element: <MyPage />,
      },
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "studio/:studioId",
        element: <Studio />,
      },
      {
        path: "studio/create",
        // loader: requireArtist,
        element: <CreateStudio />,
      },
      {
        path: "nearby",
        element: <Map />,
      },
      {
        path: "post/:postId",
        element: <Post />,
      },
    ],
  },
]);

export default router;
