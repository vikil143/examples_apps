import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface BellIconProps {
  size: number;
  stroke: string;
  color?: string;
}

function BellIcon({ size, color, stroke, ...props }: BellIconProps) {
  return (
    <Svg width={size} height={size} {...props}>
      <Path
        d="M11.889 19.857c-1.364 1.515-3.492 1.533-4.87 0m2.481-3.01c5.64 0 8.248-.723 8.5-3.627 0-2.901-1.819-2.715-1.819-6.275C16.181 4.165 13.545 1 9.5 1S2.819 4.164 2.819 6.945C2.819 10.505 1 10.32 1 13.22c.253 2.915 2.862 3.628 8.5 3.628z"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"url(#paint0_linear)"}
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
          <Stop offset={"10%"} stopColor="#1877F2" />
          <Stop offset={"70%"} stopColor="#ECF0F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const BellIconComponent = React.memo(BellIcon);
export default BellIconComponent;
