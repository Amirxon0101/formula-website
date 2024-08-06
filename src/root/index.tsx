import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingComponent } from "../component/Loading";
import { Data } from "../utils/index";


const Root: React.FC = () => {
  interface RouteData {
    component: React.ComponentType<any>;
    path: string;
  }
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        {Data.map(({ component: Component, path }: RouteData, i: number) => (
          <Route path={path} element={<Component />} key={i} />
        ))}
       

        <Route
          path={"*"}
          element={
            <div className="flex w-full h-screen justify-center items-center">
              <h1>404 Not found 🙁</h1>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Root;
