import React from 'react'
import styled from 'styled-components';
import { dragDrop, dragEnd, dragStart } from '../store';
import { useAppDispatch } from '../store/hooks';

const TileStyle = styled.div`
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.125rem;
  border-radius: 0.5rem;
  user-select: none;
  box-shadow: inset 5px 5px 15px #062525;
  box-shadow: inset -5px -5px 15px #aaaab7bb;
`

function Tile({ candy, candyId }: { candy: string, candyId: number }) {
  const dispatch=useAppDispatch();
  return (
    <TileStyle>
      {
        candy && (<img
          src={candy} 
          alt="candy" 
          className='h-20 w-20'
          candy-id={candyId} 

          draggable={true}
          onDragStart={(e)=> dispatch(dragStart(e.target))}
          onDragOver={(e)=>e.preventDefault()}
          onDragEnter={(e)=>e.preventDefault()}
          onDragLeave={(e)=>e.preventDefault()}
          onDrop={(e)=> dispatch(dragDrop(e.target))}
          onDragEnd={()=>dispatch(dragEnd())}
          />)
      }
    </TileStyle>
  )
}

export default Tile