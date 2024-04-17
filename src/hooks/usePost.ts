import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface PostConfig {
  headers?: Record<string, string>;
}

interface PostParams {
  url: string;
  config?: PostConfig;
  data: any;
  enabled?: boolean;
}

export const usePost = ({ url, config, data }: PostParams) => {
  const postData = async () => {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.data.error);
    }
  };

  return useMutation({
    mutationFn: postData,
  });
};
