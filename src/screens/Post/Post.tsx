import React from "react";
import { PostProps } from "./Post.type";
import { Box } from "@/components";

export const Post: React.FC<PostProps> = ({ navigation }) => {
  return <Box flex={1} backgroundColor={"white"}></Box>;
};
