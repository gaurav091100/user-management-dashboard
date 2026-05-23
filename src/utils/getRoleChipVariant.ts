import type { ChipVariant } from "../components/ui/Chip";

export const getRoleChipVariant = (role: string): ChipVariant => {
  switch (role?.toLowerCase()) {
    case "admin":
      return "success";

    case "moderator":
      return "primary";

    default:
      return "default";
  }
};