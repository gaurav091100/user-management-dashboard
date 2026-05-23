/* eslint-disable @typescript-eslint/no-explicit-any */
export const validate = (name: string, value: any) => {
    let error = "";

    const isEmpty = (v: any) =>
      v === undefined || v === null || String(v).trim() === "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (isEmpty(value)) error = "Required";
        else if (value.length < 2) error = "Must be at least 2 characters";
        break;

      case "email":
        if (isEmpty(value)) error = "Required";
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email";
        break;

      case "phone":
        if (isEmpty(value)) error = "Required";
        else if (!/^\+?[0-9\s-]{7,15}$/.test(value))
          error = "Invalid phone number";
        break;

      case "age":
        if (isEmpty(value)) error = "Required";
        else if (Number(value) <= 0 || Number(value) > 120)
          error = "Invalid age";
        break;

      case "gender":
        if (isEmpty(value)) error = "Required";
        break;

      case "role":
        if (isEmpty(value)) error = "Required";
        break;

      case "addressLine":
        if (isEmpty(value)) error = "Required";
        else if (value.length < 5) error = "Too short";
        break;

      case "city":
      case "state":
      case "country":
        if (isEmpty(value)) error = "Required";
        break;

      case "companyName":
        if (isEmpty(value)) error = "Required";
        else if (value.length < 2) error = "Too short";
        break;

      case "department":
        if (isEmpty(value)) error = "Required";
        break;

      case "title":
        if (isEmpty(value)) error = "Required";
        break;
    }

    return error;
  };
