import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="/second" element={<div>second</div>} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};
