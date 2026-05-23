import type { User } from "../../types/user";
import { getRoleChipVariant } from "../../utils/getRoleChipVariant";
import Chip from "../ui/Chip";

interface UserProfileCardProps {
  user: User;
}
const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-28 h-28 rounded-full object-cover border m-auto lg:m-0"
        />

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>

            <Chip label={user.role} variant={getRoleChipVariant(user.role)} />
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
            <a
              href={`mailto:${user.email}`}
              className="text-blue-600 hover:underline"
            >
              {user.email}
            </a>

            <a
              href={`tel:${user.phone}`}
              className="text-blue-600 hover:underline"
            >
              {user.phone}
            </a>
            <p>Age: {user.age}</p>
            <p className="capitalize">Gender: {user.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
