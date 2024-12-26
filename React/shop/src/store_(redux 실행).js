import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    // name : 'state 이름',
    // initialState : '값'

    name : 'user',
    initialState : 'mjs',
    reducers : {
        changeName(){
            return 'kim'
        }
    }

    /* Redux state 변경하는법 
        - state 수정해주는 함수 만들기 
           reducers : {
                 changeName(){
            return 'kim'
        } 

        - export 하기
         export let { changeName } = user.actions


        - 원할때 그 함수 실행해 달라고 store.js 에 요청
            [cart.js] 
            let dispatch = useDispatch();  선언 및 import 하기
            dispatch(changeName())  // 해당 함수 실행
    */
})


let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let shopData = createSlice({
    name :  'shopData',
    initialState :
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
})


/* 함수 내보내기 */
export let { changeName, countUp} = user.actions // 오른쪽 자료를 변수로 빼는문법 

/* state  내보내기 */
export default configureStore({
  reducer: { 
    // 작명 : user.reducer
    user : user.reducer,
    stock : stock.reducer,
    shopData : shopData.reducer,
  }
}) 