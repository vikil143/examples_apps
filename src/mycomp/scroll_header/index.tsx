import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Post from "./Post";

export default function ScrollHeader() {
  const startValue = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const scrollY = useSharedValue(0);
  const y = useDerivedValue(() => {
    return isScrolling.value
      ? scrollY.value + 1 - startValue.value
      : withTiming(0);
  });

  const onScroll = useAnimatedScrollHandler({
    onBeginDrag: ({ contentOffset: { y: Y } }) => {
      startValue.value = Y;
      isScrolling.value = true;
    },
    onScroll: ({ contentOffset: { y: Y } }) => {
      scrollY.value = Y;
    },
    onEndDrag: () => {
      isScrolling.value = false;
    },
  });

  return (
    <View style={styles.container}>
      {/* <Header {...{ y }} /> */}
      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingTop: 80 }}
        style={styles.container}
        onScroll={onScroll}
        // onScrollBeginDrag={}
        // onScrollBeginDrag={Animated.event([{ nativeEvent:{} }])}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </Animated.ScrollView>
      {/* <Footer {...{ y }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
