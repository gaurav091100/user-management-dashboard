import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../components/common/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;