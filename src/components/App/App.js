import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.min.css";
import Header from "components/Header";
import Loader from "components/Loader";
import { useGetCurrentUserQuery } from "redux/auth/authApi";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import { useSelector } from "react-redux";
import { getIsFetchingCurrentUser } from "redux/auth/auth-selectors";
import { BackTop } from "antd";
import { ButtonUp } from "./App.styles";

const HomePage = lazy(() =>
  import("pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(() =>
  import("pages/LoginPage" /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import("pages/RegisterPage" /* webpackChunkName: "register-page" */)
);

const body = document.querySelector("body");

export default function App() {
  const { isLoading } = useGetCurrentUserQuery();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  return (
    <>
      {isLoading && <Loader />}
      {!isFetchingCurrentUser && (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={<PublicRoute component={<HomePage />} />}
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    navigateTo="/login"
                  />
                }
              >
                <Route
                  path="search"
                  element={
                    <PrivateRoute
                      component={<ContactsPage />}
                      navigateTo="/login"
                    />
                  }
                />
              </Route>
              <Route
                path="/login"
                element={
                  <PublicRoute
                    component={<LoginPage />}
                    navigateTo="/contacts"
                    restricted
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    component={<RegisterPage />}
                    navigateTo="/contacts"
                    restricted
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}

      <BackTop target={() => body}>
        <ButtonUp>UP</ButtonUp>
      </BackTop>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
}
