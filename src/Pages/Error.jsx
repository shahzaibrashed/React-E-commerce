
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="container m-auto vh-100 d-flex align-items-center justify-content-center mt-3 mb-3">
                <div className="text-center">
                    <Link to={"/"} href="#" className="header-logo">
                        <img
                            src="https://i.postimg.cc/XYYNC3X8/logo.png"
                            alt="logo"
                            width={120}
                            height={36}
                        />
                    </Link>
                    <p className="lead mt-3">Oops! Something went wrong.</p>
                    <p className="mb-4">Please try again later or contact support.</p>
                    <Link to={"/"} className="btn text-danger">Go Back Home</Link>
                </div>
            </div>
            <style>
                {`
          a {
            text-decoration: none;
          }
        `}
            </style>
        </>
    );
};

export default Error;
