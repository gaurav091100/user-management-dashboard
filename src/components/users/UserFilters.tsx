interface UserFiltersProps {
  search: string;
  gender: string;
  role: string;
  sort: string;
  onSearch: (value: string) => void;
  onGenderChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

const UserFilters = ({
  search,
  gender,
  role,
  sort,
  onSearch,
  onGenderChange,
  onRoleChange,
  onSortChange,
}: UserFiltersProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border dark:border-gray-700 p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="border dark:border-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black text-xs lg:text-sm dark:bg-gray-700"
        />

        <select
          value={gender}
          onChange={(e) => onGenderChange(e.target.value)}
          className="border dark:border-gray-500 rounded-lg px-4 py-2 text-xs lg:text-sm dark:bg-gray-700 dark:text-gray-50"
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="border dark:border-gray-500 rounded-lg px-4 py-2 text-xs lg:text-sm dark:bg-gray-700 dark:text-gray-50"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
        </select>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border dark:border-gray-500 rounded-lg px-4 py-2  text-xs lg:text-sm dark:bg-gray-700 dark:text-gray-50"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="age-asc">Age Low-High</option>
          <option value="age-desc">Age High-Low</option>
        </select>
      </div>
    </div>
  );
};

export default UserFilters;