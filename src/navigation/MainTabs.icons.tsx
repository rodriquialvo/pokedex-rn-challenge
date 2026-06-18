import { FontAwesome, Ionicons } from "@expo/vector-icons";

type TabIconProps = {
  color: string;
  focused: boolean;
};

export const HomeTabIcon = ({ color, focused }: TabIconProps) => {
  return (
    <Ionicons
      name={focused ? "home" : "home-outline"}
      size={focused ? 25 : 23}
      color={color}
    />
  );
};

export const FavoritesTabIcon = ({ color, focused }: TabIconProps) => {
  return (
    <FontAwesome
      name={focused ? "heart" : "heart-o"}
      size={focused ? 25 : 23}
      color={color}
    />
  );
};
