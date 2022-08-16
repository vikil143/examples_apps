import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { products } from "./Model";

const { width } = Dimensions.get("window");
const SIZE = 200;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ProductProps {
  scrollX: Animated.SharedValue<number>;
}

const Products = ({ scrollX }: ProductProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => {
        const style = useAnimatedStyle(() => {
          return {
            transform: [
              {
                translateX: interpolate(
                  scrollX.value,
                  [(index - 1) * width, index * width, (index + 1) * width],
                  [width / 2, 0, -width / 2]
                ),
              },
              {
                scale: interpolate(
                  scrollX.value,
                  [(index - 1) * width, index * width, (index + 1) * width],
                  [0.7, 1, 0.7]
                ),
              },
            ],
          };
        });

        return (
          <Animated.View key={index} style={[styles.container, style]}>
            <Image
              source={product.picture}
              style={{ width: SIZE, height: SIZE * product.aspectRatio }}
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Products;
