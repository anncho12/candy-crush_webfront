export const formulaForColumnOfFour = (boardSize: number)=>
    boardSize*boardSize-(boardSize+boardSize+boardSize)-1;
    //8*8-8*3-1=8*5-1 (-1 이유: index시작은 0)

export const formulaForColumnOfThree = (boardSize: number)=>
    boardSize*boardSize-(boardSize+boardSize)-1;

export const formulaForMoveBelow = (boardSize : number) =>
    boardSize*boardSize-boardSize-1;

export const generateInvalidMoves=(
    //invalidMoves 값들에서 시작하는 것은 다음 row로 넘어가기 때문에 안된다.
    boardSize: number,
    isFour: boolean = false
) =>{
    const invalidMoves: Array<number>=[];
    for (let i: number = boardSize; i<=boardSize*boardSize; i+=boardSize){
        if(isFour) invalidMoves.push(i-3);
        invalidMoves.push(i-2);
        invalidMoves.push(i-1);
    }
    return invalidMoves;
};
