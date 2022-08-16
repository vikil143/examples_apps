import * as React from "react";
import { useAnimatedProps, useSharedValue } from "react-native-reanimated";
import { interpolatePath, parse } from "react-native-redash";
import Svg, { Defs, G, Path } from "react-native-svg";
import Animated from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HomeIcon({}) {
  const progress = useSharedValue(0);

  const p1 = parse(
    "M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150 "
  );
  const p2 = parse(
    "M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150 "
  );

  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(progress.value, [0, 1], [p1, p2]);
    return {
      d,
    };
  });

  return (
    <Svg width={35.427} height={32.316} viewBox="0 0 35.427 32.316">
      <Defs></Defs>
      <G>
        <AnimatedPath
          data-name="Icon awesome-home"
          //   d="M8.481 5.967L2.9 10.82v5.238a.5.5 0 00.484.511l3.39-.009a.5.5 0 00.482-.511V12.99a.5.5 0 01.484-.511h1.94a.5.5 0 01.484.511v3.057a.526.526 0 00.141.363.471.471 0 00.343.15l3.389.01a.5.5 0 00.484-.511v-5.242l-5.577-4.85a.354.354 0 00-.463 0zm8.81 3.3l-2.529-2.2v-4.43a.374.374 0 00-.363-.384h-1.694a.374.374 0 00-.363.384v2.321L9.634 2.6a1.393 1.393 0 00-1.845 0L.131 9.266a.4.4 0 00-.048.54l.771.991a.358.358 0 00.246.138.35.35 0 00.266-.086l7.115-6.192a.354.354 0 01.463 0l7.116 6.192a.35.35 0 00.511-.051l.771-.991a.4.4 0 00.081-.282.39.39 0 00-.132-.259z"
          //   transform="translate(9 3.75)"
          fill="#d30a0a"
          animatedProps={animatedProps}
        />
      </G>
    </Svg>
  );
}

export default HomeIcon;
