import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { RouterList } from "../Utils/RouterList";
import ScrollToTop from "../Components/ScrollToTop";

const AppRouter = () => {
  const location = useLocation();
  const isLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/forget" ;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {RouterList.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      {!isLoginOrSignUp && (
        <Link
          to="#"
          className="text-light scrol p-2 position-fixed bottom-0 end-0 me-3 rounded-circle d-flex align-items-center justify-content-center"
          aria-label="Scroll to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25l-7.5-7.5-7.5 7.5"
            />
          </svg>
        </Link>
      )}

      <style>
        {`
          .scrol {
            margin-bottom: 40px;
            background-color: var(--salmon-pink);
            height: 2.5rem;
            width: 2.5rem;
          }

          @media screen and (max-width: 1024px) {
            .scrol {
              margin-bottom: 60px;
            }
          }
        `}
      </style>
    </>
  );
};

export default AppRouter;
