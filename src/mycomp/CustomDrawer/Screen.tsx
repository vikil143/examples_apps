import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

interface Props {
  open: Animated.SharedValue<number>;
}

export default function Screen({ open }: Props) {
  const style = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      open.value,
      [0, 1],
      [0, 15],
      Extrapolate.CLAMP
    );
    const scale = interpolate(open.value, [0, 1], [1, 0.8], Extrapolate.CLAMP);
    const translateX = interpolate(
      open.value,
      [0, 1],
      [0, width - 100],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ scale }, { translateX }],
    };
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <View>
        <TouchableWithoutFeedback onPress={() => (open.value = withTiming(1))}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8e44ad",
              borderRadius: 5,
              margin: 5,
            }}
          >
            <MaterialIcons name="menu" size={30} color="white" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: "white",
  },
});
