import * as React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

export interface Card {
  id: string;
  name: string;
  design: number;
  thumbnail: number;
  color: string;
}

interface CardProps {
  card: Card;
  index: number;
  translateX: Animated.SharedValue<number>;
  cardRotation: Animated.SharedValue<number>;
  cardTranslation: Animated.SharedValue<number>;
  cardZIndex: Animated.SharedValue<number>;
}

const { width } = Dimensions.get("window");
const margin = width / 8;
const CARD_ASPECT_RATIO = 1324 / 863;
export const CARD_WIDTH = width - margin * 2;
export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

export default ({
  translateX,
  card,
  cardRotation,
  cardTranslation,
  cardZIndex,
  index,
}: CardProps) => {
  const cardStyles = useAnimatedStyle(() => {
    return {
      zIndex: cardZIndex.value,
      transform: [
        { translateX: translateX.value * -1 },
        { rotate: `${cardRotation.value}deg` },
        { translateX: translateX.value },
        { translateY: cardTranslation.value },
      ],
    };
  });
  return (
    <Animated.View
      key={card.id}
      style={[StyleSheet.absoluteFillObject, cardStyles]}
    >
      <Image source={card.design} style={styles.design} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  design: {
    ...StyleSheet.absoluteFillObject,
    left: margin,
    right: margin,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});
