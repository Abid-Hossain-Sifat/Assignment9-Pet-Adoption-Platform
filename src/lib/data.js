import { getApiUrl } from "./api-helper";

export const allPets = async () => {
  try {
    const res = await fetch(getApiUrl());
    if (!res.ok) {
      console.warn(`allPets fetch failed with status: ${res.status}`);
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("allPets fetch encountered an error:", error.message);
    return [];
  }
};