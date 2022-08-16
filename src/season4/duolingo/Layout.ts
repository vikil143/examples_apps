import { SharedValues } from "../components/AnimatedHelpers/Utils";

export type Offset = SharedValues<{
  order: number;
  width: number;
  height: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
}>;
