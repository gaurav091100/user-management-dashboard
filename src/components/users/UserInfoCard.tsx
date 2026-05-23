interface UserInfoCardProps {
  title: string;
  children: React.ReactNode;
};

const UserInfoCard = ({
  title,
  children,
}: UserInfoCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-sm border dark:border-gray-700 p-6">
      <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-5">
        {title}
      </h2>

      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default UserInfoCard