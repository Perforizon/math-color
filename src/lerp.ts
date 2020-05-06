export const Lerp = (from: number, to: number, by: number): number => {
    return (to - from) * by + from;
};
export function VecLerp<V extends Array<number>>(from : V, to: V, by: number) : V
{
    let VecOut : V;
    for (let i = 0; i < from.length; i++)
    {
        VecOut[i] = Lerp(from[i], to[i], by);
    }
    return VecOut;
}