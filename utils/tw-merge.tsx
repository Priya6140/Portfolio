// utils/cn.js

import { twMerge } from "tailwind-merge";

// Utility function to merge class names
const cn = (...classes: string[]) => {
  return twMerge(...classes);
};

export default cn;
