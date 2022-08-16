interface Vector {
    x: number;
    y: number;
}

interface PolarPoint {
    theta: number;
    radius: number;
}
  
  /**
   * @worklet
   */
  export const canvas2Cartesian = (v: Vector, center: Vector) => {
    
    return {
      x: v.x - center.x,
      y: -1 * (v.y - center.y),
    };
  };
  
  /**
   * @worklet
   */
  export const cartesian2Canvas = (v: Vector, center: Vector) => {
    
    return {
      x: v.x + center.x,
      y: -1 * v.y + center.y,
    };
  };
  
  /**
   * @worklet
   */
  export const cartesian2Polar = (v: Vector) => {
    
    return {
      theta: Math.atan2(v.y, v.x),
      radius: Math.sqrt(v.x ** 2 + v.y ** 2),
    };
  };
  
  /**
   * @worklet
   */
  export const polar2Cartesian = (p: PolarPoint) => {
    
    return {
      x: p.radius * Math.cos(p.theta),
      y: p.radius * Math.sin(p.theta),
    };
  };
  
  /**
   * @worklet
   */
  export const polar2Canvas = (p: PolarPoint, center: Vector) => {
    
    return cartesian2Canvas(polar2Cartesian(p), center);
  };
  
  /**
   * @worklet
   */
  export const canvas2Polar = (v: Vector, center: Vector) => {
    
    return cartesian2Polar(canvas2Cartesian(v, center));
  };