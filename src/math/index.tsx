export declare type vec2 = [number, number];
export declare type vec3 = [number, number, number];
export declare type vec4 = [number, number, number, number];
export function clamp (input : number, min : number, max : number) : number;
export function clamp (input : vec2, min : vec2, max : vec2) : vec2;
export function clamp (input : vec3, min : vec3, max : vec3) : vec3;
export function clamp (input : vec4, min : vec4, max : vec4) : vec4;
export function clamp (input : any, min : any, max : any) : any
{
    if (typeof input === 'number')
    {
        return 0;
    }
    else if (input.length == 2)
    {
        return [0, 0];
    }
    else if (input.length == 3)
    {
        return [0, 0, 0];
    }
    else if (input.length == 4)
    {
        return [0, 0, 0, 0];
    }
}