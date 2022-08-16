import React, { useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH } from "../../constants";

const SIZE = SCREEN_WIDTH - 20;
const VISIBILITY_LENGTH = 6;

interface Props {
  data: string[];
}

export default function ContainerSliderCaursal({ data }: Props) {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ padding: 10 }}>
      <View>
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
              <View
                style={{ width: SIZE, borderRadius: 10, overflow: "hidden" }}
              >
                <Image style={{ height: 250 }} source={{ uri: item }} />
              </View>
            );
          }}
        />
        <View
          style={{
            alignItems: "center",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 10,
              width: 14 * VISIBILITY_LENGTH,
              overflow: "hidden",
              paddingVertical: 5,
            }}
          >
            {data.map((_, i) => {
              const bgColor = scrollX.interpolate({
                inputRange: [(i - 1) * SIZE, i * SIZE, (i + 1) * SIZE],
                outputRange: ["red", "black", "red"],
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    backgroundColor: bgColor,
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    margin: 2,
                  }}
                />
              );
            })}
            {/* Space to adjust right side padding */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
