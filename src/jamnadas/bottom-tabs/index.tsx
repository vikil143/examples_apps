import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Layer from "./Layer";

const Bottom = createBottomTabNavigator();

export enum PositionOfTab {
  One,
  Two,
  Three,
  Four,
}

export default function BottomTabs({}) {
  const position: Animated.SharedValue<PositionOfTab> = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Bottom.Navigator
        tabBar={({ navigation }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 70,
                backgroundColor: "rgba(0,0,0,1)",
              }}
            >
              <Layer {...{ position }} />
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.One);
                  navigation.navigate("One");
                }}
              >
                <View style={styles.icon}>
                  <Ionicons name="airplane" color="white" size={25} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Two);
                  navigation.navigate("Two");
                }}
              >
                <View style={styles.icon}>
                  <Ionicons name="alarm-outline" color="white" size={25} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Three);
                  navigation.navigate("Three");
                }}
              >
                <View style={styles.icon}>
                  <Ionicons name="at-sharp" color="white" size={25} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Four);
                  navigation.navigate("Four");
                }}
              >
                <View style={styles.icon}>
                  <Ionicons name="analytics" color="white" size={25} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        }}
        screenOptions={{}}
      >
        <Bottom.Screen name="One" component={Screen1} />
        <Bottom.Screen name="Two" component={Screen2} />
        <Bottom.Screen name="Three" component={Screen3} />
        <Bottom.Screen name="Four" component={Screen4} />
      </Bottom.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: {
    flex: 1,
  },
});
