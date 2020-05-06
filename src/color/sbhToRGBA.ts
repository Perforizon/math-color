
import {VEC4} from "../vec";
import {Vec4Splat} from "../splat";
import {VecLerp} from "../lerp";
import {VecMax} from "../max";

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