//이 파일에 타입선언을 모두 해놓고 import하여 사용
import { useDispatch, useSelector} from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from "./"

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//useSelector를 typescript를 거쳐야 하기 때문에 useAppSelector로 사용한다.