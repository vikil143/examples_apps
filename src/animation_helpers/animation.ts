import Animated, {
  Extrapolate,
  interpolate,
  withRepeat,
  withTiming,
} from "react-native-reanimated";


const diff = (no: Animated.SharedValue<number>) => {
  return
}

export const rNo = (no: number) => {
  "worklet";
  return no - no * 2
}

export const reverseNumber = (no: Animated.SharedValue<number>) => {
  "worklet";
  return no.value - no.value * 2;
};

export const loopAnimated = (
  value: Animated.SharedValue<number>,
  toValue?: number,
  duration?: number,
  noOfLoop?: number,
  reverse?: boolean
) => {
  "worklet";
  value.value = withRepeat(
    withTiming(toValue as number, { duration }),
    noOfLoop,
    reverse
  );
};

// mix is used for constant interpolate
export const mix = (
  value: Animated.SharedValue<number>,
  from: number,
  to: number
) => {
  "worklet";
  return interpolate(value.value, [0, 1], [from, to]);
};

// 
export const clampInterpolate = (value: Animated.SharedValue<number>, inputRange: number[], outputRange: number[]) => {
  "worklet";
  return interpolate(value.value, inputRange, outputRange, Extrapolate.CLAMP)
}

export const snapPoint = (
  value: number,
  velocity: number,
  points: number[]
) => {
  "worklet";
  const point = value + 0.2 * velocity;
  const deltas = points.map((p) => Math.abs(point - p));
  const minDelta = Math.min.apply(null, deltas);
  return points.filter((p) => Math.abs(point - p) === minDelta)[0];
};

export const diffClamp = (value: number, min: number, max: number) => {
  "worklet";
  return;
  // return (value)
};

export const clamp = (value: number, min: number, max: number) => {
  "worklet";
  return Math.max(Math.min(value, max), min);
};
/*
// min 1 max 10
=> 4
1st  check min between 10, 4 return=> 4 
2nd check max between 1, 4 => 4

=> -1
1st check min between 10, -1 => -1
2nd check max between 1, -1 => 1

=> 11
1st check min between 10, 11 => 10
2nd check max between 1, 10 => 10

*/

export const toDeg = (rad: number) => {
  "worklet";
  return rad * (180 / Math.PI);
};
export const toRad = (deg: number) => {
  "worklet";
  return deg * (Math.PI / 180);
};
export const translateZ = () => { };
// export const translateZ = (perspective: Val, x: Val) => divide(perspective, sub(perspective, x));
