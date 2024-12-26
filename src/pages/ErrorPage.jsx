import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h2 className="text-lg md:text-5xl font-bold">Page Not Found</h2>
      <p className="text-lg md:text-3xl text-red-600">Error: 404</p>
      <Link to="/">
        <button className="btn btn-neutral">Get Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
