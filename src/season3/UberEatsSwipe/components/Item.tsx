import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  not,
  set,
  useCode,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
// import {
//   clamp,
//   snapPoint,
//   timing,
//   useClock,
//   usePanGestureHandler,
//   useValue,
// } from "react-native-redash";
import ItemLayout, { ItemModel, HEIGHT } from "./ItemLayout";
import Action from "./Action";

const { width } = Dimensions.get("window");
const snapPoints = [-width, -100, 0];
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E1E2E3",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

interface ItemProps {
  item: ItemModel;
}

const Item = ({ item }: ItemProps) => {
  return (
    <Animated.View>
      <View style={styles.background} />
      <ItemLayout {...{ item }} />
    </Animated.View>
  );
};

export default Item;
