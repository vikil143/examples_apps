import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import Screen from "./Screen";

export default function CustomDrawer() {
  const open = useSharedValue(0);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Screen {...{ open }} />
      <TouchableWithoutFeedback onPress={() => (open.value = withTiming(0))}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 5,
          }}
        >
          <MaterialIcons name="arrow-back" size={30} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e44ad",
  },
});
