import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/common/LoadingComponent.jsx";

const Main = lazy(() => import("../pages/MainPage"));
const Aso = lazy(() => import("../pages/AsoPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));

const Loading = <LoadingComponent />;

const mainRouter = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={Loading}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "/aso",
        element: (
            <Suspense fallback={Loading}>
              <Aso />
            </Suspense>
        )
      },
    ],
  },
]);

export default mainRouter;
