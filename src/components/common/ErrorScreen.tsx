import { AlertTriangle } from "lucide-react";

interface ErrorScreenProps {
  errorMessage: string;
}
const ErrorScreen = ({ errorMessage }: ErrorScreenProps) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-red-200 dark:border-red-900 bg-white dark:bg-gray-900 shadow-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
          <AlertTriangle  color="red" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
          Something went wrong
        </h2>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {errorMessage || "Failed to load data. Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-white font-medium hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
