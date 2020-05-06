export function Min(V1 : number, V2: number) : number
{
    return V1 < V2 ? V1 : V2;
}
export function VecMin(V: number[]) : number
{
    let min = V[0];
    for (let i = 1; i < V.length; i++)
    {
        min = min < V[i] ? min : V[i];
    }
    return min
}
