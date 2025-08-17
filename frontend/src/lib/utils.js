import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function nameToSlug(name) {
  return name
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars except -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

/**
 * Converts a number into a shortened format with suffix
 * @param num - The number to convert
 * @returns An object with { number: shortenedNumber, suffix: 'k' | 'm' | 'b' | '' }
 */
export function formatNumberWithSuffix(num) {
  if (num >= 1000000000) {
    return { number: parseFloat((num / 1000000000).toFixed(1)), suffix: "b" };
  }
  if (num >= 1000000) {
    return { number: parseFloat((num / 1000000).toFixed(1)), suffix: "m" };
  }
  if (num >= 1000) {
    return { number: parseFloat((num / 1000).toFixed(1)), suffix: "k" };
  }
  return { number: num, suffix: "" };
}
