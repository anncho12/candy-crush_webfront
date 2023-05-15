import { WritableDraft } from "immer/dist/types/types-external";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "../../utils/moveCheckLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "../../utils/formulas";

export const dragEndReducer = (
    state: WritableDraft<{
        board: string[];
        boardSize: number;
        squareBeingReplaced: Element | undefined;
        squareBeingDragged: Element | undefined;
    }>
)=>{
    const newBoard = [...state.board];
    let { boardSize, squareBeingDragged, squareBeingReplaced} = state;

    const squareBeingDraggedId: number = parseInt(
        squareBeingDragged?.getAttribute("candy-id") as string
        // 드래그 중인 사각형의 candy-id 속성 값을 string으로 가져옵니다.
    );
    const squareBeingReplacedId: number = parseInt(
        squareBeingReplaced?.getAttribute("candy-id") as string
        // 교체될 사각형의 candy-id 속성 값을 string으로 가져옵니다.
    );


    newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute("src") as string;
    newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute("src") as string;

    const validMoves: number[]=[
        squareBeingDraggedId -1,
        squareBeingDraggedId - boardSize,
        squareBeingReplacedId-1,
        squareBeingReplacedId - boardSize,
    ];

    const validMove: boolean = validMoves.includes(squareBeingReplacedId);
    
    const isAColumnOfFour: boolean | undefined = isColumnOfFour(
        newBoard,
        boardSize,
        formulaForColumnOfFour(boardSize)
    );
    const isARowOfFour: boolean | undefined = checkForRowOfFour(
        newBoard, 
        boardSize,
        generateInvalidMoves(boardSize, true)
    );
    const isAColumnOfThree: boolean | undefined = isColumnOfThree(
        newBoard,
        boardSize,
        formulaForColumnOfThree(boardSize)
    );
    const isARowOfThree: boolean | undefined = checkForRowOfThree(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize)
    );
    
    if (
        squareBeingReplacedId && validMove &&
        (isAColumnOfFour || isARowOfFour || isAColumnOfThree || isARowOfThree)
    ){
        squareBeingDragged = undefined;
        squareBeingReplaced = undefined;
    } else {
        newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute( "src") as string;
        newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute( "src") as string;
    }
    state.board = newBoard;
};