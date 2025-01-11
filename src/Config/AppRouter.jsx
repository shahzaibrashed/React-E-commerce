/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RouterList } from "../Utils/RouterList";
import ScrollToTop from "../Components/ScrollToTop";

const AppRouter = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        {RouterList.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Link
        to="#"
        className="text-light  p-2 position-fixed bottom-0 end-0 mb-3 me-3 rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "2.5rem", height: "2.5rem",background:"var(--salmon-pink)" }}
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
    </>
  );
};

export default AppRouter;
