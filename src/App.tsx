import React from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { useEffect } from 'react';
import { moveBelow, updateBoard } from './store';//index라는 파일은 구체적인 주소를 주지 않아도 된다. ./store는 => ./store.index를 자동으로 연결
import { createBoard } from './utils/createBoard';
import Board from './components/Board';
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from './utils/moveCheckLogic';
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from './utils/formulas';

function App() {

  const dispatch=useAppDispatch();

  const board=useAppSelector(({candyCrush:{board}})=>board);//store의 candyCrush clice의 board가져오기
  const boardSize=useAppSelector(({candyCrush:{boardSize}})=>boardSize);//store의 candyCrush clice의 boardSize가져오기

  useEffect(()=>{
    dispatch(updateBoard(createBoard(boardSize)));
    //createBoard가 boardSize에 맞는 새로운 보드 만들고 그 보드로 state를 update한다.
  }, [boardSize, dispatch]);
  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow());
    }, 150);
    return ()=> clearInterval(timeout)   
    //setInterval 함수의 반환값을 변수(timeout)에 할당해두고, clearInterval(변수)를 호출하여 반복을 중단하고, 다시 setInterval로 재시작해주면 된다.
  }, [board, boardSize, dispatch]);
  //board, boradSize, dispatch가 감지되면 150초 후에 timeout 실행하고 clearInterval(timeout)

  return (
    <div className="flex items-center justify-center h-screen">
      <Board></Board>
    </div>
  )
}

export default App