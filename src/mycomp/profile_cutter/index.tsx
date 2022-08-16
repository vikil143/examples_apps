import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import { clamp, loopAnimated } from "../../animation_helpers/animation";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import ImageAutoAdjuster from "./ImageAutoAdjuster";
import ImageCropper from "./ImageCropper";
import LocalImage from "./LocalImage";

// Using masked view comp
import MaskedView from "@react-native-community/masked-view";

const BH = 350;
const BW = SCREEN_HEIGHT;

function ProfileMaskviewCutter() {
  const r1H = useSharedValue(BW * 0.2);
  const r2W = useSharedValue(BW * 0.2);
  const r3W = useSharedValue(BW * 0.2);
  const r4H = useSharedValue(BW * 0.2);

  //
  const tX = useSharedValue(0);
  const tY = useSharedValue(0);

  // I am using hook (e.g. useShared) so value should be identity
  const minX = useSharedValue(-BW * 0.2);
  const maxX = useSharedValue(BW * 0.2);

  const minY = useSharedValue(-BW * 0.2);
  const maxY = useSharedValue(BW * 0.2);

  // const _ = loopAnimated(r1H, BW * 0.6, 1000, -1);
  // const __ = loopAnimated(r2W, BW * 0.6, 1000, -1);
  // const __ = loopAnimated(r3W, BW * 0.6, 1000, -1);
  // const ___ = loopAnimated(r4H, BW * 0.6, 1000, -1);

  const rect1Style = useAnimatedStyle(() => {
    return {
      height: r1H.value,
    };
  });
  const rect2Style = useAnimatedStyle(() => {
    return {
      width: r2W.value,
    };
  });

  const rect3Style = useAnimatedStyle(() => {
    return {
      width: r3W.value,
    };
  });

  const rect4Style = useAnimatedStyle(() => {
    return {
      height: r4H.value,
    };
  });

  const transparentViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tX.value }, { translateY: tY.value }],
    };
  });

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      tX: number;
      tY: number;
      r1H: number;
      r2W: number;
      r3W: number;
      r4H: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.tX = tX.value;
      ctx.tY = tY.value;
      ctx.r1H = r1H.value;
      ctx.r2W = r2W.value;
      ctx.r3W = r3W.value;
      ctx.r4H = r4H.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      /* 
        What happenning with this:
        1. translation value was not stopping it was contiunueely increase so need to stop this 
        Problem was:
        1. translation value increase on active.
        2. The problem which found when increase and end
        Given values:
        1. onActive and onStart translation value and context 
        2. Min and max translate values
        Solution:
        1. varible defined are tralsationX, ctx, min, max
        2. compare translationX with ctx + max  so posiblity are given below
          i. max += transltionX, 
          
      */
      // console.log("onActive ", translationX, translationY);
      const tempX = translationX;
      const tempY = translationY;
      // if (
      //   translationX < ctx.tX + BW * 0.2 &&
      //   translationX > ctx.tX - BW * 0.2 &&
      //   translationY < ctx.tY + BW * 0.2 &&
      //   translationY > ctx.tY - BW * 0.2
      // ) {
      console.log("onActive values", translationX, translationY);
      const clampX = clamp(translationX, -BW * 0.2, BW * 0.2);
      const clampY = clamp(translationY, -BW * 0.2, BW * 0.2);

      tX.value = ctx.tX + clampX;
      tY.value = ctx.tY + clampY;

      r1H.value = ctx.r1H + clampY;
      r2W.value = ctx.r2W + clampX;
      r3W.value = ctx.r3W - clampX;
      r4H.value = ctx.r4H - clampY;

      // Previuos used values
      // tX.value = clamp(ctx.tX + translationX, -BW * 0.2, BW * 0.2);
      // tY.value = clamp(ctx.tY + translationY, -BW * 0.2, BW * 0.2);

      // r1H.value = ctx.r1H + translationY;
      // r2W.value = ctx.r2W + translationX;
      // r3W.value = ctx.r3W - translationX;
      // r4H.value = ctx.r4H - translationY;
      // } else {
      //   // console.log("On else part");
      // }
    },
  });

  return (
    <View>
      <Image
        source={require("../../assets/image_one.jpg")}
        style={{ width: BW, height: BW, backgroundColor: "red" }}
      />
      <MaskedView
        style={{ position: "absolute", width: BW, height: BW }}
        maskElement={
          <View style={{ backgroundColor: "transparent", flex: 1 }}>
            <Animated.View
              style={[
                {
                  height: BW * 0.2,
                  backgroundColor: "black",
                  width: BW,
                  position: "absolute",
                },
                rect1Style,
              ]}
            />

            <Animated.View
              style={[
                {
                  height: BW,
                  backgroundColor: "black",
                  width: BW * 0.2,
                  position: "absolute",
                },
                rect2Style,
              ]}
            />

            <Animated.View
              style={[
                {
                  height: BW,
                  backgroundColor: "red",
                  width: BW * 0.2,
                  position: "absolute",
                  right: 0,
                },
                rect3Style,
              ]}
            />

            <Animated.View
              style={[
                {
                  height: BW * 0.2,
                  backgroundColor: "black",
                  width: BW,
                  position: "absolute",
                  bottom: 0,
                },
                rect4Style,
              ]}
            />
          </View>
        }
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }} />
      </MaskedView>

      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: BW * 0.2,
              left: BW * 0.2,
              width: BW * 0.6,
              height: BW * 0.6,
            },
            transparentViewStyle,
          ]}
        >
          <View style={[styles.underLineW, styles.top, styles.left]} />
          <View style={[styles.underLineH, styles.top, styles.left]} />
          <View style={[styles.underLineW, styles.top, styles.right]} />
          <View style={[styles.underLineH, styles.top, styles.right]} />
          <View style={[styles.underLineW, styles.bottom, styles.left]} />
          <View style={[styles.underLineH, styles.bottom, styles.left]} />
          <View style={[styles.underLineW, styles.bottom, styles.right]} />
          <View style={[styles.underLineH, styles.bottom, styles.right]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

// ======================

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function ProfileCutter() {
  const r1H = useSharedValue(BW * 0.2);
  // const r1W = useSharedValue(BW * 0.2);
  const r2H = useSharedValue(BW * 0.6);
  const r2W = useSharedValue(BW * 0.2);
  const r3H = useSharedValue(BW * 0.6);
  const r3W = useSharedValue(BW * 0.2);
  const r4H = useSharedValue(BW * 0.2);
  // const r4W = useSharedValue(BW * 0.2);
  // const r5H = useSharedValue(BW * 0.6);
  // const r5W = useSharedValue(BW * 0.2);
  // const r6H = useSharedValue(BW * 0.2);
  // const r6W = useSharedValue(BW * 0.2);
  // const r7H = useSharedValue(BW * 0.2);
  // const r7W = useSharedValue(BW * 0.6);
  // const r8H = useSharedValue(BW * 0.2);
  // const r8W = useSharedValue(BW * 0.2);
  const tW = useSharedValue(BW * 0.6);
  const tH = useSharedValue(BW * 0.6);

  const tranW = useSharedValue(BW * 0.6);
  const _ = loopAnimated(tranW, BW * 0.8, 1000, -1);
  // Testing purpose this are things
  const tTransitionY = useSharedValue(0);
  const tTransitionX = useSharedValue(0);
  const isGestureStarted = useSharedValue(false);

  const rect1 = useAnimatedStyle(() => {
    return {
      height: r1H.value,
    };
  });

  const rect2 = useAnimatedStyle(() => {
    return {
      width: r2W.value,
      // height: r2H.value,
    };
  });

  const rect3 = useAnimatedStyle(() => {
    return {
      width: r3W.value,
      // height: r3H.value,
    };
  });

  const rect4 = useAnimatedStyle(() => {
    return {
      height: r4H.value,
    };
  });

  // const rect5 = useAnimatedStyle(() => {
  //   return {
  //     top: r1H.value,
  //     width: r5W.value,
  //     height: r5H.value,
  //   };
  // });

  // const rect6 = useAnimatedStyle(() => {
  //   return {
  //     width: r6W.value,
  //     height: r6H.value,
  //   };
  // });

  // const rect7 = useAnimatedStyle(() => {
  //   return {
  //     left: r6W.value,
  //     width: r7W.value,
  //     height: r7H.value,
  //   };
  // });

  // const rect8 = useAnimatedStyle(() => {
  //   return {
  //     width: r8W.value,
  //     height: r8H.value,
  //   };
  // });

  const transparentStyle = useAnimatedStyle(() => {
    return {
      height: tH.value,
      width: tW.value,
      transform: [
        { translateX: tTransitionX.value },
        { translateY: tTransitionY.value },
      ],
      // Testing...
      // width: tranW.value,
      // transform: [{ scaleX: -1 }],
    };
  });

  // const rect2Container = useAnimatedStyle(() => {
  //   return {
  //     left: r1W.value,
  //     // width: r2W.value,
  //   };
  // });

  const initAssgin = (aV: Animated.SharedValue<number>, translate: number) => {
    "worklet";
    if (isGestureStarted.value) {
      return (aV.value = translate);
    } else {
      return (aV.value += translate);
    }
  };

  const transparentGeture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      x: number;
      y: number;
      r1W: number;
      r1H: number;
      r2W: number;
      r2H: number;
      r3W: number;
      r3H: number;
      r4W: number;
      r4H: number;
    }
  >({
    onStart: ({ x, y }, ctx) => {
      ctx.x = tTransitionX.value;
      ctx.y = tTransitionY.value;
      ctx.r1H = r1H.value;
      // ctx.r1W = r1W.value;
      ctx.r2W = r2W.value;
      ctx.r2H = r2H.value;
      ctx.r3W = r3W.value;
      ctx.r3H = r3H.value;
      ctx.r4H = r4H.value;
      // ctx.r4W = r4W.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      tTransitionX.value = clamp(translationX + ctx.x, -BW * 0.2, BW * 0.2);
      tTransitionY.value = clamp(translationY + ctx.y, -BW * 0.2, BW * 0.2);
      // r1,r2,r3,r4,r5,r6
      // top to bottom
      r1H.value = clamp(ctx.r1H + translationY, -BW * 0.2, BW * 0.2);
      r2W.value = ctx.r2W + translationX;
      r2W.value = ctx.r2W + translationX;
      r3W.value = ctx.r3W - translationX;
      r4H.value = clamp(ctx.r4H - translationY, -BW * 0.2, BW * 0.2);
      r3H.value = ctx.r3H + translationY;
      //   r4H.value += translationY;
      //   r5H.value += translationY;
      //   // left to right
      // r1W.value = ctx.r1W + translationY;
      //   r4W.value += translationX;
      //   r6W.value += translationX;
      //   //
      //   r7W.value -= translationX;
      //   // right to left
      //   r5W.value -= translationX;
      //   r8W.value -= translationX;
      //   // bottom to top
      //   r6H.value -= translationY;
      //   r7H.value -= translationY;
      //   r8H.value -= translationY;
      // Step 2
      //   r1H.value += translationX;
      // r1W.value = ctx.r1W + translationY;
      // console.log("onActive whats happening...", {
      //   translationX,
      //   translationY,
      // });
    },
  });

  // Testing...
  const boxStyle = useAnimatedStyle(() => {
    return {
      height: tranW.value,
    };
  });

  return (
    <SafeAreaView>
      <View>
        <View style={{}}>
          <Image
            source={require("../../assets/image_one.jpg")}
            style={{ width: BW, height: BW }}
            resizeMode="cover"
          />
          {/* r1 box */}
          <Animated.View
            style={[
              styles.rect,
              styles.top,
              styles.left,
              styles.right,
              { width: BW, height: BW * 0.2 },
              rect1,
            ]}
          />
          {/* rect1]} /> */}
          {/* r2 box */}
          <View
            style={[
              {
                width: BW,
                flexDirection: "row",
                position: "absolute",
              },
              styles.top,
              styles.left,
              styles.right,
            ]}
          >
            <Animated.View
              style={[
                styles.rect,
                {
                  position: "absolute",
                  height: BW * 0.6,
                  width: BW * 0.2,
                },
                rect2,
              ]}
            />

            <PanGestureHandler onGestureEvent={transparentGeture}>
              <Animated.View
                style={[styles.transparentStyle, transparentStyle]}
              >
                <View style={[styles.underLineW, styles.top, styles.left]} />
                <View style={[styles.underLineH, styles.top, styles.left]} />
                <View style={[styles.underLineW, styles.top, styles.right]} />
                <View style={[styles.underLineH, styles.top, styles.right]} />
                <View style={[styles.underLineW, styles.bottom, styles.left]} />
                <View style={[styles.underLineH, styles.bottom, styles.left]} />
                <View
                  style={[styles.underLineW, styles.bottom, styles.right]}
                />
                <View
                  style={[styles.underLineH, styles.bottom, styles.right]}
                />
              </Animated.View>
            </PanGestureHandler>

            <Animated.View
              style={[
                styles.rect,
                styles.right,
                {
                  position: "absolute",
                  height: BW * 0.6,
                  width: BW * 0.2,
                },
                rect3,
              ]}
            />
          </View>

          {/* r3 box */}
          {/* ================== middle boxes ================= */}
          {/* r4 box */}
          <Animated.View
            style={[
              styles.rect,
              styles.bottom,
              styles.right,
              styles.left,
              { width: BW, height: BW * 0.2 },
              rect4,
            ]}
          />
          {/*  rect4]} /> */}
          {/* r5 box */}
          {/* <Animated.View style={[styles.rect, styles.right]} /> */}

          {/* rect5]} /> */}
          {/* ================== middle boxes ================== */}
          {/* r6 box */}
          {/* <Animated.View style={[styles.rect, styles.bottom, styles.left]} /> */}
          {/* //     rect6]}
        // /> */}
          {/* r7 box */}
          {/* <Animated.View style={[styles.rect, styles.bottom]} /> */}
          {/* rect7]} /> */}
          {/* r8 box */}
          {/* <Animated.View style={[styles.rect, styles.bottom, styles.right]} /> */}
          {/* //     rect8]}
        // /> */}
          {/* transparent view box */}
          {/* <View>
          <ImageAutoAdjuster />
        </View>

        <View style={{ backgroundColor: "red", padding: 10 }} />
        <ImageCropper
          image={require("../../assets/image_two.jpg")}
          width={SCREEN_WIDTH * 0.7}
          height={SCREEN_WIDTH * 0.7}
          left={50}
          top={SCREEN_WIDTH * 0.15}
        /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "red",
    width: BW * 0.6,
    height: BW * 0.6,
  },

  rect: {
    position: "absolute",
    backgroundColor: "#00000080",
  },
  transparentStyle: {
    position: "absolute",
    left: BW * 0.2,
  },
  underLineW: {
    width: 40,
    height: 3,
    backgroundColor: "red",
    position: "absolute",
  },
  underLineH: {
    height: 40,
    width: 3,
    backgroundColor: "red",
    position: "absolute",
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

// export default ProfileCutter;
// Maskview comp
export default ProfileMaskviewCutter;
