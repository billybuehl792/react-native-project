// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

interface TabBarIconProps
  extends IconProps<ComponentProps<typeof Ionicons>["name"]> {}

const TabBarIcon: React.FC<TabBarIconProps> = ({ style, ...props }) => {
  return (
    <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...props} />
  );
};

export default TabBarIcon;
