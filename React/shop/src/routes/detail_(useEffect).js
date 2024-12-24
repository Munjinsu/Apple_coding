import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

/*
    컨퍼넌트의 Lifecycle     
        페이지에 장착되기도 하고 (mount)
        업데이트도 되고          (update)
        필요없으면 제거되기도 함 (unmount)
*/


function Detail(props){

    let [count, setCount] = useState(0);
    let [show, setShow] = useState(true);

    useEffect(()=>{
        /*
        for(var i = 0; i < 10000; i++){
            console.log(i)
        }
        */
        // useEffect 안에 있는 코드는 html 렌더링 후에 동작 함.  html 렌더링 후 계산 -> 더 빨라보임임
        // 오래걸리는 코드를 넣는것이 이점 !!!
        // 서버에서 데이터가져오는 작업 
        // 타이머 장착하는거 

        let timer = setTimeout(()=>{setShow(false)}, 2000)

        return ()=>{    /*useEffect 동작전에 실행  (clean up function) */  
            clearTimeout(timer)
            /*  기존 타이머는 제거해주세요
                
            기존 데이터 요청은 제거해주세요.
            */
        }   
    },[])

    /* []  == mount 나 업데이트 될대 한번만 실행
       [스테이트명명]  == 변수가 변할때 리렌더링 됨  
    */

    /*
     for(var i = 0; i < 10000; i++){
         console.log(i)
     }
    */
    //   계산이 끝난후에 html 뿌려짐 

    /*  빡통식  useEffect 사용법 */
    /*
        1. useEffect(()=>{})       제렌더링마다 코드실행하고 싶으면 
        2. useEffect(()=>{},[])    mount 시 1회 코드 실행하고 싶으면 
        3. useEffect(()=>{
            return()=>{
                unmount 시 1회 코드 실행하고 싶으면 
            }    
        },[])    
    
    
    */


    let {page} = useParams();
    page = parseInt(page)

    let findId = props.shoes.find((x)=>{  
        return x.id == page
    })
    
   /* find()는 arry 뒤에 붙일 수 있으며 return 조건식 씀, 그럼 조건에 맞는 자료만 남겨줌*/

    return(
        <div className="container">

            {
               show? (
                <div className="alert alert-warning">  {/*  //* 숙제 -- 2초후 사라지게 만들기  */}
                    2초이내 구매시 할인
                </div>
               ) : null
            }
            
            {count}
            <button onClick={()=>{
                setCount(count + 1)
            }}>버튼 
            </button>

            <div className="row">
                <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${page+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

export default Detail