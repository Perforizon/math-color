export function Max(V1:number, V2:number) : number
{
    return V1 > V2 ? V1 : V2;
}
export function VecMax(V: number[]) : number
{
    let max = V[0];
    for (let i = 1; i < V.length; i++)
    {
        max = max > V[i] ? max : V[i];
    }
    return max;
}