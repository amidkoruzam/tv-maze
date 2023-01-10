import { useState } from "react";
import { showsAPI } from "src/shared/api/shows";

export const useShowSearch = () => {
  const [isLoading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    const response = await showsAPI.search({ query });
    setLoading(false);
    return response;
  };

  return { isLoading, search };
};
