/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import type { UserFormValues } from "../../types/user";
import { validate } from "../../utils/validation";

interface Props {
  open: boolean;
  mode: "create" | "edit";
  isSubmitting: boolean;
  initialData?: UserFormValues;
  onClose: () => void;
  onSubmit: (data: UserFormValues) => void;
}

const emptyForm: UserFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  role: "user",
  image: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  companyName: "",
  department: "",
  title: "",
};

const UserFormModal: React.FC<Props> = ({
  open,
  mode,
  isSubmitting,
  initialData,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState<UserFormValues>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    const updatedValue = name === "age" ? Number(value) || "" : value;

    setForm((prev:UserFormValues) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, updatedValue),
    }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    Object.keys(form).forEach((key) => {
      const err = validate(key, (form as any)[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSubmit(form);
    onClose();
  };

    useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm(initialData);
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [initialData, mode, open]);

  return (
    <Modal
      open={open}
      title={mode === "create" ? "Add User" : "Edit User"}
      onClose={onClose}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 no-scrollbar scroll-smooth"
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className="text-xs font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-semibold">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              name="age"
              placeholder="Enter your age"
              type="number"
              value={form.age}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.age && <p className="text-xs text-red-500">{errors.age}</p>}
          </div>
          <div>
            <label className="text-xs font-semibold">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-xs text-red-500">{errors.gender}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
            {errors.role && (
              <p className="text-xs text-red-500">{errors.role}</p>
            )}
          </div>       
        </div>
        <div className="mt-3">
            <label className="text-xs font-semibold">Profile Image URL</label>
            <input
              name="image"
              placeholder="Enter profile image URL"
              value={form.image}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

        <div>
          <label className="text-xs font-semibold">
            Address Line <span className="text-red-500">*</span>
          </label>
          <input
            name="addressLine"
            placeholder="Enter address line"
            value={form.addressLine}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.addressLine && (
            <p className="text-xs text-red-500">{errors.addressLine}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <div>
            <label className="text-xs font-semibold">
              City <span className="text-red-500">*</span>
            </label>
            <input
              name="city"
              placeholder="Enter your city"
              value={form.city}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.city && (
              <p className="text-xs text-red-500">{errors.city}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold">
              State <span className="text-red-500">*</span>
            </label>
            <input
              name="state"
              placeholder="Enter your state"
              value={form.state}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.state && (
              <p className="text-xs text-red-500">{errors.state}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold">
              Contry <span className="text-red-500">*</span>
            </label>
            <input
              name="country"
              placeholder="Enter your country"
              value={form.country}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.country && (
              <p className="text-xs text-red-500">{errors.country}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              name="companyName"
              placeholder="Enter your company name"
              value={form.companyName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.companyName && (
              <p className="text-xs text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold">
              Department <span className="text-red-500">*</span>
            </label>
            <input
              name="department"
              placeholder="Enter your department"
              value={form.department}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.department && (
              <p className="text-xs text-red-500">{errors.department}</p>
            )}
          </div>
        </div>

        <div className="mt-3">
          <label className="text-xs font-semibold">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            name="title"
            placeholder="Enter title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.title && (
            <p className="text-xs text-red-500">{errors.title}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
        >
          {mode === "create" ? "Create User" : "Update User"}
        </button>
      </form>
    </Modal>
  );
};

export default UserFormModal;
