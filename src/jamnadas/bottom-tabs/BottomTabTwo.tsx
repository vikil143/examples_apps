import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import CommentIcon from "./svg/CommentIcon";
import HomeIconComponent from "./svg/HomeIcon";
import BellIconComponent from "./svg/BellIcon";
import UserIconComponent from "./svg/UserIcon";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

const Bottom = createBottomTabNavigator();

export enum PositionOfTab {
  One,
  Two,
  Three,
  Four,
}

export default function BottomTabsTwo() {
  const position: Animated.SharedValue<PositionOfTab> = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Bottom.Navigator
        tabBar={({ navigation }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 60,
                backgroundColor: "white",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.One);
                  navigation.navigate("One");
                }}
              >
                <View style={styles.icon}>
                  <CommentIcon stroke="black" color="white" size={30} />
                </View>
              </TouchableWithoutFeedback>
              {/* <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Two);
                  navigation.navigate("Two");
                }}
              > */}
              <View style={styles.icon}>
                <HomeIconComponent
                  stroke="black"
                  color="white"
                  size={30}
                  {...{ position }}
                />
              </View>
              {/* </TouchableWithoutFeedback> */}
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Three);
                  navigation.navigate("Three");
                }}
              >
                <View style={styles.icon}>
                  <BellIconComponent stroke="black" color="white" size={30} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  position.value = withTiming(PositionOfTab.Four);
                  navigation.navigate("Four");
                }}
              >
                <View style={styles.icon}>
                  <UserIconComponent stroke="black" color="white" size={25} />
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
