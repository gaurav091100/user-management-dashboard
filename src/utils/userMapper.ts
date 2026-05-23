import type { User, UserFormValues, UserPayload } from "../types/user";

export const mapUserPayload = (form: UserFormValues):UserPayload => {
  return {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    age: Number(form.age),
    gender: form.gender,
    role: form.role,
    image: form.image,
    address: {
      address: form.addressLine,
      city: form.city,
      state: form.state,
      country: form.country,
    },
    company: {
      name: form.companyName,
      department: form.department,
      title: form.title,
    },
  };
};

export const mapUserToFormValues = (
  user: User
): UserFormValues => {
  return {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phone: user.phone || "",
    age: user.age || "",
    gender: user.gender || "",
    role: user.role || "",
    image: user.image || "",
    addressLine: user.address?.address || "",
    city: user.address?.city || "",
    state: user.address?.state || "",
    country: user.address?.country || "",
    companyName: user.company?.name || "",
    department: user.company?.department || "",
    title: user.company?.title || "",
  };
};