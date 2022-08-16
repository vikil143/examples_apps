import React from "react";
import Animated, { min } from "react-native-reanimated";
import { Ring, TAU } from "./Constants";
import CircularProgress from "./CircularProgress";

interface RingProps {
  ring: Ring;
}

export default ({ ring }: RingProps) => {
  return (
    <CircularProgress
      theta={TAU}
      radius={ring.size / 2}
      bg={ring.bg}
      fg={ring.start}
    />
  );
};
