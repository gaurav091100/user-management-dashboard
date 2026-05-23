import { useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import UserDetailsSkeleton from "../components/skeletons/UserDetailsSkeleton";
import UserInfoCard from "../components/users/UserInfoCard";
import UserInfoItem from "../components/users/UserInfoItem";
import UserProfileCard from "../components/users/UserProfileCard";
import type { User } from "../types/user";

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = Number(id);
  const { user, loading, error } = useUser(userId);

  if (loading) {
    return <UserDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Users
        </button>
        <UserProfileCard user={user as User} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <UserInfoCard title="Address Information">
            <UserInfoItem label="Address" value={user?.address?.address || ""} />
            <UserInfoItem label="City" value={user?.address?.city  || ""} />
            <UserInfoItem label="State" value={user?.address?.state  || ""} />
            <UserInfoItem label="Country" value={user?.address?.country  || ""} />
          </UserInfoCard>
          <UserInfoCard title="Company Information">
            <UserInfoItem label="Company" value={user?.company?.name  || ""} />
            <UserInfoItem label="Department" value={user?.company?.department  || ""} />
            <UserInfoItem label="Title" value={user?.company?.title  || ""} />
          </UserInfoCard>
          <UserInfoCard title="Additional Information">
            <UserInfoItem label="Birth Date" value={user?.birthDate  || ""} />
            <UserInfoItem label="University" value={user?.university  || ""} />
          </UserInfoCard>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
