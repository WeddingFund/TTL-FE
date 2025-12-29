import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Alerts from "../pages/Alerts";
import Feed from "../pages/Feed";
import Landing from "../pages/Landing";
import MyPage from "../pages/MyPage";
import Studio from "../pages/Studio";
import Map from "../pages/Map";
import Post from "../pages/Post";
import CreateStudio from "../pages/CreateStudio";

const isAuthenticated = () => {
  return Boolean(localStorage.getItem("login")); // 실제 앱에선 쿠키나 전역 상태 사용
};
const router = createBrowserRouter([
  {
    path: "/landing",
    Component: Landing,
  },
  {
    path: "/",
    loader: () => {
      if (!isAuthenticated()) {
        return redirect("/landing");
      }
      return null;
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: Feed,
      },
      {
        path: "feed",
        Component: Feed,
      },
      {
        path: "mypage",
        Component: MyPage,
      },
      {
        path: "alerts",
        Component: Alerts,
      },
      {
        path: "studio/:studioId",
        Component: Studio,
      },
      {
        path: "studio/create",
        Component: CreateStudio,
      },
      {
        path: "map",
        Component: Map,
      },
      {
        path: "post/:postId",
        Component: Post,
      },
    ],
  },
]);

export default router;
