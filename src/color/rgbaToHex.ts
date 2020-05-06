import {VEC4} from "../vec";
import {ValueToHex} from "./valueToHex";

export const RGBAToHex = (color : VEC4) : string => {
    const _0X = (Math.round(color[0]*255))/16;
    const _0 = Math.floor(_0X);
    const _1 = (_0X - _0)*16;
  
    const _2X = (Math.round(color[1]*255))/16;
    const _2 = Math.floor(_2X);
    const _3 = (_2X - _2)*16;
  
    const _4X = (Math.round(color[2]*255))/16;
    const _4  = Math.floor(_4X);
    const _5 = (_4X - _4)*16;
  
    const _6X = (Math.round(color[3]*255))/16;
    const _6  = Math.floor(_6X);
    const _7 = (_6X - _6)*16;
   
    return `#${ValueToHex[_0]}${ValueToHex[_1]}${ValueToHex[_2]}${ValueToHex[_3]}${ValueToHex[_4]}${ValueToHex[_5]}${ValueToHex[_6]}${ValueToHex[_7]}`;
  }
  