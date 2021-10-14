export const isNotEmpty = (value) => value.trim() !== "";
export const isEmail = (value) =>
  value.includes("@") && value.length >= 6 && value.includes(".");
export const isPassword = (value) => value.length > 6;
