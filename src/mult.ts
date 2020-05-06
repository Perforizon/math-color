// private
export function VecMult(V : number[], val : number)
{
    let VOut : number[] = new Array<number>(V.length);
    for (let i = 0; i < V.length; i++)
    {
        VOut[i] = V[i] * val;
    }
    return VOut;
}