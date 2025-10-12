import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Alerts from "../pages/Alerts";
import Feed from "../pages/Feed";
import Landing from "../pages/Landing";
import MyPage from "../pages/MyPage";
import Studio from "../pages/Studio";
import Map from "../pages/Map";

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
      // return redirect("/feed");
      return null; // 사용자 정보 return 하면 각 페이지에서 접근 가능?
    },
    Component: Layout,
    children: [
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
        path: "studio",
        Component: Studio,
      },
      {
        path: "map",
        Component: Map,
      },
    ],
  },
]);

export default router;
