import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
   
    name : 'user',
    initialState : {name : 'mjs', age : 20},
    reducers : {
        changeName(state){
            state.name = 'kim' 

        },
        changeAge(state, action){ 
            state.age += action.payload  
        },           
    }
})

export let { changeName, changeAge} = user.actions // 오른쪽 자료를 변수로 빼는문법 

export default user