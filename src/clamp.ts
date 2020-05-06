import {Min} from "./min";
import {Max} from "./max";

export function Clamp(input:number, v1:number, v2:number) : number{
    const min = Min(v1, v2);
    const max = Max(v1, v2);
    if (input < min)
        return min;
    else if (input > max)
    {
        return max;
    }
    else
        return input;
}