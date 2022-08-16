import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("screen");

interface Props {
  data: string[];
}

const SIZE = width - 20;
const DOTS_SIZE = 10;
const DOTS_MARGIN = 3;

export default function NormalCaurols({ data }: Props) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.divide(scrollX, SIZE);
  const inputRange: number[] = [0, 0.2, 0.8, 1];
  const widthOutputRange: number[] = [
    DOTS_SIZE,
    DOTS_SIZE * 2 + DOTS_MARGIN * 2,
    DOTS_SIZE * 2 + DOTS_MARGIN * 2,
    DOTS_SIZE,
  ];

  const translateXOutputRange: number[] = [
    0,
    0,
    0,
    DOTS_SIZE + DOTS_MARGIN * 2,
  ];

  /* 
    This hof was used to excute store the data of 
    inputs, outputs and translateX of animations values...
  */

  const result = data.reduce((pV, cV, i) => {
    inputRange.push(0 + i);
    inputRange.push(0.2 + i);
    inputRange.push(0.8 + i);
    inputRange.push(1 + i);
    //
    widthOutputRange.push(DOTS_SIZE);
    widthOutputRange.push(DOTS_SIZE * 2 + DOTS_MARGIN * 2);
    widthOutputRange.push(DOTS_SIZE * 2 + DOTS_MARGIN * 2);
    widthOutputRange.push(DOTS_SIZE);
    //
    const pRV = DOTS_SIZE * i + DOTS_MARGIN * 2 * i;
    translateXOutputRange.push(pRV);
    translateXOutputRange.push(pRV);
    translateXOutputRange.push(pRV);
    translateXOutputRange.push(DOTS_SIZE * (i + 1) + DOTS_MARGIN * 2 * (i + 1));

    return "0";
  });

  const activeDotTranslateX = progress.interpolate({
    inputRange,
    outputRange: translateXOutputRange,
  });

  const activeDotWidth = progress.interpolate({
    inputRange,
    outputRange: widthOutputRange,
  });

  return (
    <View style={{ padding: 10 }}>
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, ind) => ind.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ width: SIZE, borderRadius: 10, overflow: "hidden" }}>
              <Image style={{ height: 250 }} source={{ uri: item }} />
            </View>
          );
        }}
      />
      <View style={styles.dotContainer}>
        <View style={{ flexDirection: "row" }}>
          {data.map((_, i) => {
            return <View key={i} style={[styles.dot]} />;
          })}
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: DOTS_SIZE / 2,
                margin: DOTS_MARGIN,
                backgroundColor: "green",
                width: activeDotWidth,
                transform: [{ translateX: activeDotTranslateX }],
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  dot: {
    width: DOTS_SIZE,
    height: DOTS_SIZE,
    borderRadius: DOTS_SIZE / 2,
    backgroundColor: "red",
    margin: DOTS_MARGIN,
  },
});
