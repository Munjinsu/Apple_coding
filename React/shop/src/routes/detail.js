import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Detail(props){

    let [count, setCount] = useState(0);
    let [value, setValue ] = useState("")


    useEffect(()=>{ 
        if(isNaN(value) == true){
            alert('숫자입력')
        }
        
    },[value])

    let {page} = useParams();
    page = parseInt(page)

    let findId = props.shoes.find((x)=>{  
        return x.id == page
    })

    return(
        <div className="container">

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
                    <input type="text" onChange={(e)=>{
                        setValue(e.target.value)
                    }}/>
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