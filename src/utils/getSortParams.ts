export const getSortParams = (
  sort: string
): {
  sortBy: string;
  order: "asc" | "desc";
} => {
  switch (sort) {
    case "name-asc":
      return { sortBy: "firstName", order: "asc" };

    case "name-desc":
      return { sortBy: "firstName", order: "desc" };

    case "age-asc":
      return { sortBy: "age", order: "asc" };

    case "age-desc":
      return { sortBy: "age", order: "desc" };

    default:
      return { sortBy: "", order: "asc" };
  }
};