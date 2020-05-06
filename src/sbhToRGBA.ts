
import {VEC4, Vec4Splat, VecLerp, VecMax} from "@perforizon/math";

export const SBHToRGBA = (
    saturation: number,
    brightness: number,
    hue: VEC4
  ): VEC4 => {
    const hueAfterBrighttness : VEC4 = VecLerp(hue, [0,0,0,0], brightness);
    const brightestChannelValue = VecMax(hueAfterBrighttness.splice(0,3));
    const hueAfterSaturationBrightness: VEC4 = VecLerp(hueAfterBrighttness, Vec4Splat(brightestChannelValue), 1-saturation);
    return hueAfterSaturationBrightness;
  };