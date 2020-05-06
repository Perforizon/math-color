import {VEC4, VEC2} from "../vec";
import {VecMin} from "../min";
import {VecMax} from "../max";

export const RGBAToSBGrad = (color : VEC4) : VEC2 =>
{
 const _minColorChannelValue = color[VecMin(color.slice(0, 3))];
 const _maxColorchannelValue = color[VecMax(color.slice(0, 3))];
 if (_maxColorchannelValue == 0)
   return [0,0];
 return [_minColorChannelValue/_maxColorchannelValue,_maxColorchannelValue];
}