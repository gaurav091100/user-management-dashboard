const UserDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Back button skeleton */}
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

        {/* Profile card skeleton */}
        <div className="rounded-2xl border bg-white dark:bg-gray-700 p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {/* Avatar */}
            <div className="h-28 w-28 animate-pulse rounded-full bg-gray-200 m-auto lg:m-0" />

            <div className="flex-1 space-y-4">
              {/* Name */}
              <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />

              {/* Badge */}
              <div className="h-6 w-full lg:w-24 animate-pulse rounded-full bg-gray-200" />

              {/* Info rows */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Section cards skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white dark:bg-gray-700 p-6 shadow-sm"
            >
              <div className="mb-6 h-6 w-48 animate-pulse rounded bg-gray-200" />

              <div className="space-y-5">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="space-y-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSkeleton;
