import {VEC4} from "@perforizon/math";

export const RGBAToString = (color: VEC4) :string => {
    return `${color[0].toFixed(2)},${color[1].toFixed(2)},${color[2].toFixed(2)},${color[3].toFixed(2)}`;
  }
  