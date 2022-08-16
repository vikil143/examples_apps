import Animated, { interpolate } from "react-native-reanimated";


export const bInterpolate = (animatedValue: Animated.SharedValue<number>, firstNode:number, lastNode:number) => {
    "worklet"
    return interpolate(animatedValue.value,[0,1],[firstNode,lastNode]);
}