interface InfoItemProps {
  label: string;
  value: string | number;
};

const UserInfoItem = ({
  label,
  value,
}: InfoItemProps) => {
  return (
    <div className="border-b pb-3 last:border-none">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="font-medium text-gray-900 mt-1">
        {value}
      </p>
    </div>
  );
};

export default UserInfoItem;
