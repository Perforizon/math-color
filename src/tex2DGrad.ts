// returns horizontally lerped value between 0 and 1 based on the provided raster index
export const Tex2DGradX = (width:number, index: number) : number => {
    return (index % width) / (width - 1);
}
// returns vertically lerped value between 0 and 1 based on the provided raster index
export const Tex2DGradY =  (width: number, height: number, index: number): number => {
    return Math.floor(index / width) / (height - 1);
};
