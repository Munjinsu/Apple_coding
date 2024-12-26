import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'


/* 파일 분할  -->   ./store/userSlice   */
// let user = createSlice({
//     // name : 'state 이름',
//     // initialState : '값'

//     name : 'user',
//     initialState : {name : 'mjs', age : 20},
//     reducers : {
//         changeName(state){
//             // return {name : 'kim', age : 20}

//             // array, object의 경우 return 문 없이 직접수정해도 state 변경 가능 
//             state.name = 'kim' 

//         },
//         changeAge(state, action){  // 보통 파라미터를 action 으로 많이 작명함
//             state.age += action.payload  //  payload = 화물 (보낼때 화물도 같이 보낸다 ?) 
//         },           
//     }
// })


let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})


let shopData = createSlice({
    name :  'shopData',
    initialState :
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    
    reducers : {  
        //  버튼 누를때 마다 해당 id 찾아서 1씩 올리기
        addCount(state, action){
            
            let findId = state.findIndex((x)=>{
                return x.id == action.payload
            })

            state[findId].count++;
        },
        //detail 페이지에서 주문하기 버튼 누르면 cart 에 추가 하기
        addCart(state, action){
            let findItem = state.findIndex((a)=>{
                return a.id === action.payload.id
            })

            if (findItem >= 0 ){
                console.log('장바구니에 있음')
                state[findItem].count++ 
            }
            else {
                console.log('장바구에 없음')
                state.push(action.payload)
            } 

        },
        //버튼 누를면 삭제 
        removeCart(state, action){
            let filterCart = state.filter((x)=> {
                return x.id !== action.payload
            });
            return filterCart;
        }
            
    }
})

export let { addCount, addCart, removeCart} = shopData.actions

/* 함수 내보내기 */
//export let { changeName, changeAge} = user.actions // 오른쪽 자료를 변수로 빼는문법   /* 파일 분할 */

/* state  내보내기 */
export default configureStore({
  reducer: { 
    // 작명 : user.reducer
    user : user.reducer,
    stock : stock.reducer,
    shopData : shopData.reducer,
  }
})