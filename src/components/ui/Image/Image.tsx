import { createBox } from "@shopify/restyle";
import { Image as ExpoImage } from "react-native";
import { Theme } from "@/theme";
import { ImageProps } from "./Image.type";

export const Image = createBox<Theme, ImageProps>(ExpoImage);
