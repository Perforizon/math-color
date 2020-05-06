import {VEC4} from "@perforizon/math";
import {HexToValue} from "./hexToValue";

export const HexToRGBA = (text : string) : VEC4 => {
    text = text.replace("#", "");
    text = text.replace("0x", "");
    
    if (text.length != 6 && text.length != 8)
      return null;
    
    for (let i = 0; i < text.length; i++)
    {
      const charCode = text.charCodeAt(i);
      if (
        !(charCode >= 48 || charCode <= 57) &&
        !(charCode >= 65 || charCode <= 70) &&
        !(charCode >= 61 || charCode <= 66)
      )
        return null;
    }
    const r = (HexToValue[text[0]]*16 + HexToValue[text[1]])/255;
    const g = (HexToValue[text[2]]*16 + HexToValue[text[3]])/255;
    const b = (HexToValue[text[4]]*16 + HexToValue[text[5]])/255;
    let a = 1;
    if (text.length == 8)
      a = (HexToValue[text[6]]*16 + HexToValue[text[7]])/255;
  
    return [r, g, b, a];
  }