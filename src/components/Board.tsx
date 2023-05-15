import React from 'react'
import { useAppSelector } from '../store/hooks';
import Tile from './Tile';
import styled from 'styled-components';

const BoardStyle=styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    /* width:6.25*$boardSize_rem; props에 변수를 전달하면 된다.*/
`

function Board() {
    const board=useAppSelector(({candyCrush:{board}})=>board);//store의 candyCrush clice의 board가져오기
    const boardSize=useAppSelector(({candyCrush:{boardSize}})=>boardSize);//store의 candyCrush clice의 board가져오기

    return (
    <BoardStyle style={{width:`${6.25*boardSize}rem`}}
    //     className="flex flex-wrap rounded-lg" style={{
    //     width:`${6.25*boardSize}rem`//
    // }}
    >
        {
            board.map((candy:string, index:number)=>(
                <Tile candy={candy} key={index} candyId={index}/>
            ))
        }
     
    </BoardStyle>
  )
}

export default Board