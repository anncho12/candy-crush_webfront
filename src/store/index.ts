import { createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";
import { dragEndReducer } from "./reducers/dragEnd";

const initialState:{//stateSlice 객체 초기화
    board: string[];
    boardSize: number;
    squareBeingDragged: Element | undefined;
    squareBeingReplaced: Element | undefined;
}={
    board:[], 
    boardSize:8,//initial value
    squareBeingDragged: undefined,
    squareBeingReplaced: undefined,
}

const candyCrushSlice=createSlice({
    name:"candyCrush",
    initialState,
    reducers:{
        updateBoard : (state, action:PayloadAction<string[]>) => {//action의 payload에 String 타입이 들어감.
            state.board=action.payload;//dispath에서 action으로 입력받은 값을 board값으로 하여 새로운 state만들기
        },

        dragStart:(state, action: PayloadAction<any>)=>{
            state.squareBeingDragged = action.payload;
        },
        dragDrop:(state, action: PayloadAction<any>)=>{
            state.squareBeingReplaced = action.payload;
        },
        dragEnd: dragEndReducer,
        moveBelow: moveBelowReducer
        //deleteaboard : (state, action~)=>{}
        //candyCrushSlice에 관여하는 reducer를 추가할 수 있다.
    }
},)

export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
            //store가 불변성을 유지하지 않아도 에러가 나지 않고 경고문만 뜨도록 해준다.
        }),
})

export const { updateBoard, moveBelow , dragDrop, dragEnd, dragStart } = candyCrushSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
