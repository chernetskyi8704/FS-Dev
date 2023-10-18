import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AuthPage from "../../pages/AuthPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<AuthPage />} />
        <Route path="/sign-up" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
