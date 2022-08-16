import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { mix } from "../../animation_helpers/animation";

const { height, width } = Dimensions.get("screen");

interface Props {
  show: boolean;
  hide: () => void;
}

const CONTENT_HEIGHT_MAX = 250;
const CONTENT_HEIGHT_MIN = 150;
const duration = 450;
const snapPoints = [0, height - CONTENT_HEIGHT_MIN, height];

function Modal({ show, hide }: Props) {
  const dragY = useSharedValue(0);
  const isOpen = useDerivedValue(() => {
    const value = show ? 1 : 0;
    return withTiming(value, { duration });
  }, [show]);

  const onHide = () => {
    hide();
    dragY.value = 0;
  };

  const containerStyle = useAnimatedStyle(() => {
    const translateY = mix(isOpen, height, 0);
    return {
      transform: [{ translateY }],
    };
  });

  const tapGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { y: number }
  >({
    onStart: (_, ctx) => {
      ctx.y = dragY.value;
    },
    onActive: ({ translationY }, ctx) => {
      dragY.value = Math.max(ctx.y + translationY, 0);
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(dragY.value, velocityY, snapPoints);
      dragY.value = withTiming(dest);
    },
  });

  const mainViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: dragY.value }],
    };
  });

  const animatedLayerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      dragY.value,
      [
        0,
        (height - CONTENT_HEIGHT_MIN) * 0.2,
        (height - CONTENT_HEIGHT_MIN) * 0.7,
        height - CONTENT_HEIGHT_MIN,
      ],
      [0, 0.6, 1, 1],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  const animatedVideoContainer = useAnimatedStyle(() => {
    const videHeight = interpolate(
      dragY.value,
      [0, height - CONTENT_HEIGHT_MIN],
      [CONTENT_HEIGHT_MAX, CONTENT_HEIGHT_MIN - 40],
      Extrapolate.CLAMP
    );
    const videoWidth = interpolate(
      dragY.value,
      [0, (height - CONTENT_HEIGHT_MIN) * 0.7, height - CONTENT_HEIGHT_MIN],
      [width, width, width * 0.45],
      Extrapolate.CLAMP
    );
    return {
      height: videHeight,
      width: videoWidth,
    };
  });

  console.log("## Modal render");
  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={[styles.mainStyle, mainViewStyle]}>
        <PanGestureHandler onGestureEvent={tapGesture}>
          <Animated.View style={[{ backgroundColor: "white" }]}>
            {/* <TouchableWithoutFeedback onPress={hide}> */}
            <Animated.View
              style={[
                { height: CONTENT_HEIGHT_MAX, backgroundColor: "red" },
                animatedVideoContainer,
              ]}
            >
              <Image
                style={{ height: undefined, width: undefined, flex: 1 }}
                source={require("../../assets/image_one.jpg")}
              />
            </Animated.View>
            {/* </TouchableWithoutFeedback> */}
          </Animated.View>
        </PanGestureHandler>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 60,
              backgroundColor: "white",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 1,
              borderColor: "#333",
              padding: 10,
            }}
          >
            <Text style={[styles.title]}>Super Rider </Text>
            <Text style={[styles.subTitle]}>With hardly devid son</Text>
            {/* <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "grey",
                  marginVertical: 5,
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "grey",
                  marginVertical: 5,
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "grey",
                  marginVertical: 5,
                }}
              /> */}
          </View>
          <View style={{ padding: 2 }}>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../../assets/image_one.jpg")}
            />
            <View style={styles.playLayer}></View>
          </View>
          <View style={{ padding: 2 }}>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../../assets/image_two.jpg")}
            />
            <View style={styles.playLayer}></View>
          </View>
          <View style={{ padding: 2 }}>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../../assets/image_two.jpg")}
            />
            <View style={styles.playLayer}></View>
          </View>

          <Animated.View style={[styles.layer, animatedLayerStyle]} />
        </View>
      </Animated.View>
      {/* </PanGestureHandler> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
  },
  title: {
    fontSize: 16,
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    // opacity: 0.5,
  },
  playLayer: {
    position: "absolute",
    height: 60,
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  mainStyle: {
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    zIndex: 10,
  },
});

export default Modal;
