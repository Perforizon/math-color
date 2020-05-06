import {VEC4} from "../vec";
// returns the hue of a color
export const RGBAToHue = (color : VEC4) : VEC4 => {
    // push colors channels into array of value : index
    let colorSorted : [number, number][] = new Array(3);
    for (let i = 0; i < 3; i++)
      colorSorted[i] = [color[i], i];
    colorSorted.sort(); 
    
    const hue : VEC4 = [0,0,0,1];
    const LOW_CHANNEL = 0;
    const MID_CHANNEL = 1;
    const HIGH_CHANNEL = 2;
    const VALUE = 0;
    const INDEX = 1;
    hue[colorSorted[HIGH_CHANNEL][INDEX]] = 1;
    hue[colorSorted[LOW_CHANNEL][INDEX]] = 0;
    const value = (colorSorted[HIGH_CHANNEL][VALUE]+colorSorted[LOW_CHANNEL][VALUE]);
    // if highest and lowest color channel adds up to 0, this means they are both 0 and the hue could be theoretically anything,
    // so just return the default color (red). Also avoids division by 0.
    if (value == 0)
      return [1,0,0,1];
    hue[colorSorted[MID_CHANNEL][INDEX]] = colorSorted[MID_CHANNEL][VALUE]/value;
    return hue;
  }
  
  export const hueToGradient = (color : VEC4) : number => {
    let colorSorted : [number, number][] = new Array(3);
    for (let i = 0; i < 3; i++)
      colorSorted[i] = [color[i], i];
    colorSorted.sort(); 
    const LOW_CHANNEL = 0;
    const MID_CHANNEL = 1;
    const HIGH_CHANNEL = 2;
    const VALUE = 0;
    const INDEX = 1;
    const RED = 0;
    const GREEN = 1;
    const BLUE = 2;
    // Assumes that color represents a hue. In other words, the high channel will always be 1.0,
    // the low channel will always be 0.0, and the mid channel will awlays be a number between 0 and 1.
    // Red to Yellow 
    // 0 to 1/6
    if (colorSorted[HIGH_CHANNEL][INDEX] == RED && colorSorted[MID_CHANNEL][INDEX] == GREEN)
    {
      return colorSorted[MID_CHANNEL][VALUE]/6;
    }
    // Yellow to Green 
    // 1/6 to 2/6
    else if (colorSorted[HIGH_CHANNEL][INDEX] == GREEN && colorSorted[MID_CHANNEL][INDEX] == RED)
    {
      return 2/6 - colorSorted[MID_CHANNEL][VALUE]/6;
    }
    // Green to Cyan
    // 2/6 to 3/6
    else if (colorSorted[HIGH_CHANNEL][INDEX] == GREEN && colorSorted[MID_CHANNEL][INDEX] == BLUE)
    {
      return 2/6 + colorSorted[MID_CHANNEL][VALUE]/6;
    }
    // Cyan to Blue
    // 3/6 to 4/6
    else if (colorSorted[HIGH_CHANNEL][INDEX] == BLUE && colorSorted[MID_CHANNEL][INDEX] == GREEN)
    {
      return 4/6 - colorSorted[MID_CHANNEL][VALUE]/6;
    }
    // Blue to Magenta
    // 4/6 to 5/6
    else if (colorSorted[HIGH_CHANNEL][INDEX] == BLUE && colorSorted[MID_CHANNEL][INDEX] == RED)
    {
      return 4/6 + colorSorted[MID_CHANNEL][VALUE]/6;
    }
    // Magenta to Red
    // 5/6 to 6/6
    else if (colorSorted[HIGH_CHANNEL][INDEX] == RED && colorSorted[MID_CHANNEL][INDEX] == BLUE)
    {
      return 6/6 - colorSorted[MID_CHANNEL][VALUE]/6;
    }
    return 0;
  }
  