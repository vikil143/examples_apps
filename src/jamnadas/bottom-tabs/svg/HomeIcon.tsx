import * as React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { mountTiming } from "../../../animation_helpers/hooks";
import { PositionOfTab } from "../BottomTabTwo";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface HomeIconProps {
  size: number;
  color?: string;
  stroke: string;
  position: Animated.SharedValue<PositionOfTab>;
}

function HomeIcon({ size, color, stroke, position }: HomeIconProps) {
  // const progress = useSharedValue(0);
  const progress = mountTiming();

  // const progress = useDerivedValue(() => {
  //   const to = position.value === PositionOfTab.Two ? 1 : 0;
  //   return withSpring(to);
  // });

  const isGoingUp = useDerivedValue(() => {
    const to = position.value === 1 ? true : false;
    return to;
  });

  const rectStyle = useAnimatedStyle(() => {
    const translateY = isGoingUp.value
      ? interpolate(progress.value, [0, 0.4], [0, -5])
      : 0;

    const opacity = isGoingUp.value ? progress.value : 0;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const pathPropsDown = useAnimatedProps(() => {
    const opacity = isGoingUp.value
      ? interpolate(progress.value, [0, 0.1], [1, 0], Extrapolate.CLAMP)
      : 1;

    return {
      opacity,
      scale: 0.6,
      translateX: size / 4,
      translateY: size / 4,
    };
  });

  const pathPropsUp = useAnimatedProps(() => {
    const translateY = interpolate(
      progress.value,
      [0, 0.2, 0.8, 1],
      [size / 4, size / 4, (size / 4) * 0, (size / 4) * 0.2],
      Extrapolate.CLAMP
    );

    const scale = interpolate(progress.value, [0, 0.8, 1], [0, 1, 0.6]);

    return {
      scale,
      translateY,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // console.log("Be Ready....");
        progress.value = withTiming(1);
      }}
    >
      <View>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: size * 2,
              height: size * 2,
              backgroundColor: "red",
              borderRadius: 25,
            },
            rectStyle,
          ]}
        />
        <Svg
          width={size * 2}
          height={size * 2}
          viewBox={`0 0 ${size} ${size}`}
          fill={color}
        >
          <AnimatedPath
            animatedProps={pathPropsUp}
            d="M7.657 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924C18.445 21 20 19.46 20 17.562V8.838a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L1.962 6.943A2.42 2.42 0 001 8.847v8.715C1 19.46 2.555 21 4.473 21h1.924c.685 0 1.241-.55 1.241-1.229"
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={"url(#paint0_linear)"}
            // translateX={size / 3.5}
          />

          <AnimatedPath
            d="M7.657 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924C18.445 21 20 19.46 20 17.562V8.838a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L1.962 6.943A2.42 2.42 0 001 8.847v8.715C1 19.46 2.555 21 4.473 21h1.924c.685 0 1.241-.55 1.241-1.229"
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={"url(#paint0_linear)"}
            animatedProps={pathPropsDown}
          />

          <Defs>
            <LinearGradient
              id="paint0_linear"
              x1={13.9252}
              y1={1}
              x2={13.9252}
              y2={23.5}
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset={"20%"} stopColor="#1877F2" />
              <Stop offset={"70%"} stopColor="#ECF0F3" />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>
    </TouchableWithoutFeedback>
  );
}

// const HomeIconComponent = React.memo(HomeIcon);
export default HomeIcon;
