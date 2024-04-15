import { View, Text } from "react-native";
import { get } from "@/navigation";

export default function App() {
  get()
  return (
    <View className="flex">
      <Text>HElO</Text>
      {/* <RootNavigation /> */}
    </View>
  );
}
