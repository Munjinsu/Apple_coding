import { Table } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './../store'


function Cart(){

    /* Redux == 컴포넌트들이 props 없이 state 공유가능 */

    /* 참고사항 
       package.json 에서 react 및 react-dom 버전이 18버전 상위여야 함  
    */
    /* 셋팅
        1. store.js 파일 생성 
        2. store.js 파일 안에 코드 추가 
        3. index.js에 코드 추가 
        <Provider store={store}>
    */

    let state = useSelector((state)=>{ return state}) // Redux store 에 있는 모근 state 가져와줌
    //let state = useSelector((state)=> state ) // 생략 가능
    let user = useSelector((state)=>{ return state.user}) // Redux store 에 있는 user state 만 가져와줌

    let shopData = useSelector((state)=>{ return state.shopData}) // Redux store 에 있는 user state 만 가져와줌
    let dispatch = useDispatch();  // stroe.js 로 요청을 보내는 함수
    
    return (
        <div>

            
            <h3>{user} 의 장바구니</h3>
            <button onClick={()=>{
                dispatch(changeName())
            }}>user 변경</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        shopData.map((data)=>{
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name }</td>
                                    <td>{data.count }</td>
                                    <td>
                                        <button onClick={()=>{
                                           
                                        }}>+</button>
                                    </td>
                                </tr>
                            )       
                        })
                    }
                    
                </tbody>
            </Table>    
        </div>
    )
}

export default Cart