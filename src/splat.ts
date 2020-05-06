import {VEC2, VEC3, VEC4} from "./vec";

export const Vec2Splat = (V : number) : VEC2 =>
{
    return [V, V];
}
export const Vec3Splat = (V : number) : VEC3 =>
{
    return [V, V, V];
}
export const Vec4Splat = (V : number) : VEC4 =>
{
    return [V, V, V, V];
}