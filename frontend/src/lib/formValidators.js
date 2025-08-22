// formValidators.js

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === "") {
    return `${fieldName} is required.`;
  }
  return null;
};

export const validateEmail = (value) => {
  if (!value || value.trim() === "") return "Email is required.";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return "Invalid email format.";
  return null;
};

export const validatePhone = (value) => {
  if (!value || value.trim() === "") return "Phone number is required.";
  const regex = /^[0-9]{10}$/; // you can tweak for your country
  if (!regex.test(value)) return "Phone number must be 10 digits.";
  return null;
};

export const validateNumberRange = (value, min, max, fieldName) => {
  if (!value) return `${fieldName} is required.`;
  const num = Number(value);
  if (isNaN(num)) return `${fieldName} must be a number.`;
  if (num < min || num > max)
    return `${fieldName} must be between ${min} and ${max}.`;
  return null;
};
