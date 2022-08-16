import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
} from "react-native-reanimated";
import Card from "./Card";

const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;

const { height } = Dimensions.get("window");
const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF",
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF",
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF",
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF",
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF",
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF",
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF",
  },
];

export default () => {
  // One transformation value y
  const y = useSharedValue(0);

  const onPangesture = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: ({ translationY }) => {
      console.log("translationY", translationY);
    },
    onEnd: () => {},
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onPangesture}>
          <Animated.View style={StyleSheet.absoluteFill}>
            {cards.map((card, i) => {
              return <Card key={i} {...{ y, i }} color={card.color} />;
            })}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
  },
  container: {
    flex: 1,
  },
  content: {
    height: height * 2,
  },
  card: {
    height: cardHeight,
    borderRadius: 10,
  },
});
