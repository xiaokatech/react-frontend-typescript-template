import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import HelloWorld from "./pages/HelloWorld";
import { SelectPage } from "./pages/SelectPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="/hello-world" element={<HelloWorld name="World" />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/second" element={<div>second</div>} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};
