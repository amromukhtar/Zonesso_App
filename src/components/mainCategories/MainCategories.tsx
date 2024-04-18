import { Box, IconCard } from "@/components";
import { MainCategoriesProps } from "./MainCategories.type";

const mainCategoriesList = [
  { title: "Motors", icon: require("@/assets/app/motors.png") },
  { title: "Motorbikes", icon: require("@/assets/app/Motorbikes.png") },
  { title: "Showrooms", icon: require("@/assets/app/Showrooms.png") },
  { title: "Parts & Accesories", icon: require("@/assets/app/Parts.png") },
  { title: "Number Plates", icon: require("@/assets/app/Number.png") },
  { title: "Car Service", icon: require("@/assets/app/Car-Service.png") },
  { title: "Car Wash", icon: require("@/assets/app/Car-Wash.png") },
  { title: "Car Recovery", icon: require("@/assets/app/Car-Recovery.png") },
  { title: "Boats", icon: require("@/assets/app/Boats.png") },
];

export const MainCategories: React.FC<MainCategoriesProps> = ({
  navigation,
}) => {
  const onCategoryItemPress = (name: string) => {
    return () => {
      // navigation.navigate("RestaurantList", { title: name });
    };
  };

  return (
    <Box
      flex={1}
      backgroundColor="white"
      flexDirection="row"
      justifyContent={"center"}
      flexWrap="wrap"
    >
      {mainCategoriesList.map((category, index) => {
        const { title, icon } = category;
        return (
          <IconCard
            marginLeft={index == 0 ? "none" : "s"}
            marginTop={"m"}
            title={title}
            icon={icon}
          />
        );
      })}
    </Box>
  );
};
