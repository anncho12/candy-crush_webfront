//맨 처음 보드 상태를 만들어 반환헤 주는 함수
import { candies } from "./candyData"
export const createBoard = (boardSize: number)=> //인수는 number type의 boardSize
    //createBoard는 string(img의 url) 2배열 함수를 return한다.
    Array(boardSize*boardSize)
        .fill(null)
        .map(()=>candies[Math.floor(Math.random()*candies.length)]);