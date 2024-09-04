import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});

interface CollapsibleProps extends PropsWithChildren {
  title: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
};

export default Collapsible;
