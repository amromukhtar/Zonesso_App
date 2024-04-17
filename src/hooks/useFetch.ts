import { QueryKey, useQuery } from "@tanstack/react-query";
import { API_SERVER_URL } from '@/config'
import axios from "axios";

interface FetchConfig {
  headers?: Record<string, string>;
}

interface FetchParams {
  url: string;
  queryKey: QueryKey;
  config?: FetchConfig;
  data?: any;
  enabled?: boolean;
  initialData?: any
}

export const useFetch = ({
  url,
  config,
  queryKey,
  enabled,
  initialData
}: FetchParams) => {

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_SERVER_URL}${url}`, config);
      return response.data;
    } catch (error: any) {
      return error
    }
  };

  return useQuery({
    queryKey,
    queryFn: fetchData,
    enabled,
    initialData
  });

};
