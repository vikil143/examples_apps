import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../constants";

interface Props {
  ind: number;
}

export default function Box({ ind }: Props) {
  return (
    // <TouchableWithoutFeedback onPress={() => onPress(ind)}>
    <Animated.View style={[styles.container]}>
      <View style={{}} />
      <Text>Box</Text>
    </Animated.View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: SCREEN_WIDTH / 3.5,
    height: SCREEN_WIDTH / 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
  },
});
