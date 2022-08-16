import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Box from "./Box";
import { SCREEN_WIDTH } from "../../constants";
import { clamp } from "../../animation_helpers/animation";

const categoryArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function DoubleScroller() {
  // const animatedValue = useSharedValue(0);
  // let subCategoryRef: React.LegacyRef<Animated.ScrollView> = React.createRef();
  let subCategoryRef =
    useRef<React.MutableRefObject<React.LegacyRef<Animated.ScrollView>>>();
  let categoryRef = useRef();
  let y = useSharedValue(0);
  const tapRef = useRef();
  const panRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};

  // const scrollValue = useAnimatedScrollHandler({
  //   onScroll: ({ contentOffset: { x, y } }) => {
  //     animatedValue.value = y;
  //   },
  // });

  const onPanGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { y: number }
  >({
    onStart: ({ translationY }, ctx) => {
      ctx.y = y.value;
    },
    onActive: ({ translationY }, ctx) => {
      y.value = translationY + ctx.y;
    },
  });

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onEnd: () => {},
    });

  const containerStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  });

  return (
    <View style={[styles.container]}>
      <View style={{ backgroundColor: "red", width: SCREEN_WIDTH / 3.5 }}>
        <PanGestureHandler
          ref={panRef}
          waitFor={tapRef}
          onGestureEvent={onPanGestureEvent}
        >
          <Animated.View>
            {/* <TapGestureHandler ref={tapRef} onGestureEvent={tapGestureEvent}> */}
            <Animated.View style={containerStyles}>
              {categoryArray.map((_, ind) => {
                return <Box key={ind} ind={ind} />;
              })}
            </Animated.View>
            {/* </TapGestureHandler> */}
          </Animated.View>
        </PanGestureHandler>
      </View>
      <View style={{ backgroundColor: "green", width: SCREEN_WIDTH }}>
        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: {} } }])}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Animated.View style={{ height: 400, backgroundColor: "red" }} />
          <Animated.View style={{ height: 400, backgroundColor: "blue" }} />
          <Animated.View style={{ height: 400, backgroundColor: "red" }} />
          <Animated.View style={{ height: 400, backgroundColor: "blue" }} />
          <Animated.View style={{ height: 400, backgroundColor: "red" }} />
          <Animated.View style={{ height: 400, backgroundColor: "blue" }} />
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});
