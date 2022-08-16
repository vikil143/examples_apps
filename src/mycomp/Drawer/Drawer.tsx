import {
  Easing,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  BackHandler,
  BackHandlerStatic,
  NativeEventSubscription,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import {} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";

type SLIDETYPE = "HORIZONTAL" | "VERITCAL";
type slideStartDefaultValues = {
  translateX: number;
  translateY: number;
};
type slideEndDefaultValues = {
  translateX: number;
  translateY: number;
};

interface DrawerProps {
  open: boolean;
  hide: () => void;
  duration?: number;
  containerStyles?: ViewStyle;
  slideType?: SLIDETYPE;
  hasBackdrop?: boolean;
}

export default function Drawer({
  open,
  hide,
  duration = 400,
  containerStyles,
  slideType = "HORIZONTAL",
  hasBackdrop = true,
}: DrawerProps) {
  // state for opening and closing
  //   const [open, setOpen] = useState(false);
  const animatedValue = useDerivedValue(() => {
    const a = open ? 1 : 0;
    return withTiming(a, { duration });
  }, [open]);

  useEffect(() => {
    let buttonlistner: NativeEventSubscription;
    if (open) {
      buttonlistner = BackHandler.addEventListener("hardwareBackPress", () => {
        onHide();
        return true;
      });
    } else {
      buttonlistner?.remove();
    }

    return () => {
      buttonlistner?.remove();
    };
  }, [open]);

  const onHide = () => {
    hide();
  };

  const slideStart = (): slideStartDefaultValues => {
    "worklet";
    switch (slideType) {
      case "HORIZONTAL":
        return {
          translateX: -SCREEN_WIDTH,
          translateY: 0,
        };
      case "VERITCAL":
        return {
          translateX: 0,
          translateY: SCREEN_HEIGHT,
        };
    }
  };

  const slideEnd = (): slideEndDefaultValues => {
    "worklet";
    switch (slideType) {
      case "HORIZONTAL":
        return {
          translateX: 0,
          translateY: 0,
        };
      case "VERITCAL":
        return {
          translateX: 0,
          translateY: 0,
        };
    }
  };

  const animatedStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedValue.value,
      [0, 1],
      [slideStart().translateX, slideEnd().translateX]
    );

    const translateY = interpolate(
      animatedValue.value,
      [0, 1],
      [slideStart().translateY, slideEnd().translateY]
    );

    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  const backdropStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedValue.value,
      [0, 0.7, 1],
      [slideStart().translateX, slideEnd().translateX, 0]
    );

    const opacity = interpolate(animatedValue.value, [0, 0.7, 1], [0, 0, 1]);

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
      {/* backdrop */}
      <TouchableWithoutFeedback onPress={onHide}>
        <Animated.View style={[styles.backdrop, backdropStyles]} />
      </TouchableWithoutFeedback>
      {/* ======== */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.container,
          containerStyles,
          animatedStyles,
        ]}
      >
        <Text>Drawer</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    height: "100%",
    transform: [{ translateX: -SCREEN_WIDTH }, { translateY: SCREEN_HEIGHT }],
    zIndex: 1000,
  },
});
