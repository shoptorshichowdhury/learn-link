import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 md:space-y-4">
      <h2 className="text-lg md:text-5xl font-bold">Page Not Found</h2>
      <p className="text-lg md:text-3xl text-red-600 font-medium">Error: 404</p>
      <Link to="/">
        <button className="btn btn-neutral">Get Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
