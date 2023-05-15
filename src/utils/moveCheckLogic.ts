export const isColumnOfFour = (
    newBoard : string[],
    boardSize: number,
    formulaForColumnOfFour : number
) => {
    for (let i: number=0; i <= formulaForColumnOfFour; i++){
        //전체 보드를 돌면서 세로4개 일치하는 tile을 찾으면 밑에 if문 실행
        const columnOfFour: number[]=[//세로4개 index
            i, 
            i + boardSize, 
            i + boardSize*2,
            i + boardSize*3,
        ];
        const decidedColor: string= newBoard[i];
        const isBlank: boolean = newBoard[i]==="";

        if(columnOfFour.every((candy:number)=>newBoard[candy]===decidedColor && !isBlank)){//만약 세로4개가 일치하면
            //every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다. 모두가 true일 때 true를 반환한다.
            //columnOfFour 각 값(candy) 모두가 newBoard[candy]===decidedColor[i] 이고, !isBlank[i]이면 true반환
            columnOfFour.forEach((candy:number)=>newBoard[candy]="");
            //reset을 위해 Blank로 만들기
            return true
        }
    }
};

export const isColumnOfThree = (
    newBoard : string[],
    boardSize: number,
    formulaForColumnOfThree : number
) => {
    for (let i: number=0; i <= formulaForColumnOfThree; i++){
        const columnOfThree: number[]=[//세로3개 index
            i, 
            i + boardSize, 
            i + boardSize*2,
        ];
        const decidedColor: string= newBoard[i];

        const isBlank: boolean = newBoard[i]==="";

        if(columnOfThree.every((candy:number)=>newBoard[candy]===decidedColor && !isBlank)){
            //every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다. 모두가 true일 때 true를 반환한다.
            //columnOfFour 각 값(candy) 모두가 newBoard[candy]===decidedColor[i] 이고, !isBlank[i]이면 true반환
            columnOfThree.forEach((candy:number)=>newBoard[candy]="");
            //reset을 위해 Blank로 만들기
            return true
        }
    }
};

export const checkForRowOfFour = (
    newBoard: string[],
    boardSize: number,
    invalidMoves: number[]
) =>{
    for (let i:number=0; i<boardSize*boardSize; i++){
        const rowOfFour= [i, i+1, i+2, i+3]
        const decidedColor: string= newBoard[i];

        const isBlank: boolean = newBoard[i]==="";
        if(invalidMoves.includes(i)) continue;
        if(rowOfFour.every((candy:number)=>newBoard[candy]===decidedColor && !isBlank)){
            //every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다. 모두가 true일 때 true를 반환한다.
            //columnOfFour 각 값(candy) 모두가 newBoard[candy]===decidedColor[i] 이고, !isBlank[i]이면 true반환
            rowOfFour.forEach((candy:number)=>newBoard[candy]="");
            //reset을 위해 Blank로 만들기
            return true
        }
    }
}

export const checkForRowOfThree = (
    newBoard: string[],
    boardSize: number,
    invalidMoves: number[]
) =>{
    for (let i:number=0; i<boardSize*boardSize; i++){
        const rowOfThree= [i, i+1, i+2]//i~i+2
        const decidedColor: string= newBoard[i];//i번째 Tile의 색

        const isBlank: boolean = newBoard[i]==="";

        if(invalidMoves.includes(i)) continue;
        if(rowOfThree.every((candy:number)=>newBoard[candy]===decidedColor && !isBlank)){
            //every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다. 모두가 true일 때 true를 반환한다.
            //columnOfThree 각 값(candy) 모두가 newBoard[candy]===decidedColor[i] 이고, !isBlank[i]이면 true반환
            rowOfThree.forEach((candy:number)=>newBoard[candy]="");
            //reset을 위해 Blank로 만들기
            return true
        }
    }
}