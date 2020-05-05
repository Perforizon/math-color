export declare type vec2 = [number, number];
export declare type vec3 = [number, number, number];
export declare type vec4 = [number, number, number, number];
// private
function _clamp(input:number, min:number, max:number) : number{
    if (input > min)
        return input;
    else if (input < max)
    {
        return input;
    }
    else
        return input;
}
export function clamp (input : number, min : number, max : number) : number;
export function clamp (input : vec2, min : vec2, max : vec2) : vec2;
export function clamp (input : vec3, min : vec3, max : vec3) : vec3;
export function clamp (input : vec4, min : vec4, max : vec4) : vec4;
export function clamp (input : any, min : any, max : any) : any
{
    if (typeof input === 'number')
    {
        return _clamp(input, min, max);
    }
    else if (input.length == 2)
    {
        return (input as vec2).map((val, index)=>_clamp(val, min[index], max[index]));
    }
    else if (input.length == 3)
    {
        return (input as vec3).map((val, index)=>_clamp(val, min[index], max[index]));
    }
    else if (input.length == 4)
    {
        return (input as vec4).map((val, index)=>_clamp(val, min[index], max[index]));
    }
}