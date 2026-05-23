import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Page Not Found
      </p>
      <Link
        to="/"
        className="mt-6 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFoundPage;
