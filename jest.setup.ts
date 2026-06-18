jest.mock("@/theme/useAppTheme", () => ({
  useAppTheme: () => require("@/test-utils/mockTheme").mockTheme,
}));

jest.mock("@expo/vector-icons", () => ({
  AntDesign: "AntDesign",
  Feather: "Feather",
  Entypo: "Entypo",
}));
