import * as React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { toRad } from "react-native-redash";
// import { translateZ } from "react-native-redash";

const { interpolate, Extrapolate, multiply, sin, abs } = Animated;
const { width } = Dimensions.get("window");
const ratio = 863 / 609;
export const CARD_WIDTH = width;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

interface FaceProps {
  scale: Animated.SharedValue<number>;
  isOnTop?: boolean;
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

export default ({ scale, isOnTop }: FaceProps) => {
  const perspective = CARD_HEIGHT;
  const inputRange = [0.5, 1];

  const style = useAnimatedStyle(() => {
    const rotateX = interpolate(
      scale.value,
      inputRange,
      [isOnTop ? 90 : -90, 0],
      Extrapolate.CLAMP
    );

    const x = (-CARD_HEIGHT / 2) * Math.sin(Math.abs(toRad(rotateX)));
    const scaleAnim = perspective / (perspective - x);

    return {
      transform: [
        { perspective },
        { rotateX: `${rotateX}deg` },
        { scale: scaleAnim },
      ],
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, style]}>
      <Image
        source={require("../assets/queen-of-spade.png")}
        style={styles.image}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          //   opacity,
          //   backgroundColor: "black",
        }}
      />
    </Animated.View>
  );
};
