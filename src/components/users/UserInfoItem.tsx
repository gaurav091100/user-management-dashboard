interface InfoItemProps {
  label: string;
  value: string | number;
};

const UserInfoItem = ({
  label,
  value,
}: InfoItemProps) => {
  return (
    <div className="border-b dark:border-b-gray-400 pb-3 last:border-none">
      <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-50">{label}</p>

      <p className="text-xs lg:text-sm font-medium text-gray-900 dark:text-gray-50 mt-1">
        {value}
      </p>
    </div>
  );
};

export default UserInfoItem;
