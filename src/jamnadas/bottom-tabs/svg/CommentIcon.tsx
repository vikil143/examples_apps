import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface CommentIconProps {
  size: number;
  color?: string;
  stroke: string;
}

function CommentIcon({ size, color, stroke, ...props }: CommentIconProps) {
  return (
    <Svg width={size} height={size} {...props}>
      <Path
        d="M14.242 10.892h.009m-3.817 0h.008m-3.817 0h.009m10.584 6.324c-2.904 2.904-7.203 3.531-10.72 1.904-.52-.209-.946-.378-1.35-.378-1.128.007-2.532 1.1-3.261.372-.73-.73.364-2.134.364-3.269 0-.405-.162-.823-.371-1.343C.252 10.984.88 6.684 3.784 3.78 7.49.073 13.512.073 17.218 3.78c3.713 3.713 3.706 9.73 0 13.436z"
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

export default CommentIcon;
