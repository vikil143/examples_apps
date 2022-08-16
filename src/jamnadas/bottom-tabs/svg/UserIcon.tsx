import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

interface UserIconProps {
  size: number;
  color?: string;
  stroke: string;
}

function UserIcon({ size, color, stroke, ...props }: UserIconProps) {
  return (
    <Svg width={size} height={size} fill={color} {...props}>
      <Circle
        cx={12.5}
        cy={12.5}
        r={11.25}
        stroke={stroke}
        strokeWidth={1.5}
        fill={"url(#paint0_linear)"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 15.534c-3.106 0-5.758.473-5.758 2.37 0 1.896 2.636 2.386 5.758 2.386 3.106 0 5.758-.474 5.758-2.37 0-1.895-2.635-2.386-5.758-2.386zM12.5 12.83c2.039 0 3.69-1.667 3.69-3.722 0-2.055-1.651-3.72-3.69-3.72-2.038 0-3.69 1.665-3.69 3.72-.008 2.048 1.634 3.714 3.664 3.721h.026z"
        // fill="#ffff"
      />
      <Path
        clipRule="evenodd"
        d="M12.5 15.534c-4.106 0-5.758.473-5.758 2.37 0 1.896 2.636 2.386 5.758 2.386 3.106 0 5.758-.474 5.758-2.37 0-1.895-2.635-2.386-5.758-2.386zM12.5 12.83c2.039 0 3.69-1.667 3.69-3.722 0-2.055-1.651-3.72-3.69-3.72-2.038 0-3.69 1.665-3.69 3.72-.008 2.048 1.634 3.714 3.664 3.721h.026z"
        stroke="#3F2D3B"
        strokeLinecap="round"
        // strokeWidth={1.5}
        fill="#ffff"
        // fill={color}
        strokeLinejoin="round"
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

const UserIconComponent = React.memo(UserIcon);
export default UserIconComponent;
