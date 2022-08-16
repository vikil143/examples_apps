import React from "react";
import { Dimensions, View, ScrollView, StyleSheet } from "react-native";

import { products } from "./Model";
import Card, { CARD_HEIGHT } from "./Card";
import Products from "./Products";
import Cards from "./components/Cards";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {} from "react-native-redash";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slider: { height: CARD_HEIGHT },
});

const snapToOffsets = [0, CARD_HEIGHT];

const PhilzCoffee = () => {
  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      scrollX.value = x;
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollX.value,
        products.map((_, i) => i * width),
        products.map((product, i) => product.color2)
      ),
    };
  });

  return (
    <Animated.View style={style}>
      <ScrollView
        bounces={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        snapToEnd={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={onScroll}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
          >
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products scrollX={scrollX} />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default PhilzCoffee;
