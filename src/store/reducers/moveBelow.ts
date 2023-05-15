import { WritableDraft } from "immer/dist/types/types-external";
import { formulaForMoveBelow } from "../../utils/formulas";
import { candies } from "../../utils/candyData";

export const moveBelowReducer =(
    state : WritableDraft<{
        //WritableDraft: redux-toolkit에서 불변성을 유지하면서 쉽게 store를 바꿀 수 있게 하는 library
        board: string[];
        boardSize: number;
        squareBeingReplaced: Element | undefined;
        //typescript에서 | 는 union을 뜻한다. Element와 undefined 타임 가능
        //Element는 컴포넌트를 받는다. 하위개념으로 HTMLElement도 있다.
        squareBeingDragged: Element | undefined;
    }>
) =>{
    const newBoard: string[] = [...state.board];
    const {boardSize} = state;

    let boardChanges:boolean = false;
    const formulaForMove: number = formulaForMoveBelow(boardSize);
    for(let i=0; i<=formulaForMove; i++){
        const firstRow = Array(boardSize)
            .fill(0)
            .map((_value: number, index: number)=>index);

        const isFirstRow = firstRow.includes(i);

        if (isFirstRow && newBoard[i]===""){
            let randomNumber = Math.floor(Math.random()* candies.length);
            newBoard[i] = candies[randomNumber];
            boardChanges = true;
        }

        if (newBoard[i+boardSize]===""){
            newBoard[i+boardSize]=newBoard[i];
            newBoard[i]="";
            boardChanges=true;
        }

        if (boardChanges) state.board = newBoard;
    }
}