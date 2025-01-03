import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap';


function Detail(props){

    let [count, setCount] = useState(0);
    let [value, setValue ] = useState("")
    let [tab, setTab] = useState(0);
    
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

            <h3>탭만들기</h3>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item> 
                    <Nav.Link eventKey="link0" onClick={()=> setTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=> setTab(1)} >버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=> setTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <HandleTab tab={tab}/>
        </div>
    )
}

function HandleTab({tab}){

    let [fade, setFade] = useState("")

    useEffect(()=>{

        let timer = setTimeout(()=>{
            setFade("end")
        }, 100)
        return()=>{
            clearTimeout(timer)
            setFade("")
        }
        
    },[tab])


    // if (tab == 0) {
    //     return <div>내용0</div>   
    // }else if(tab == 1){
    //     return <div>내용1</div>   
    // }else if(tab == 2){
    //     return <div>내용2</div>   
    // }

    return (
        <div className={`start ${fade}`}>
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
        </div>
    )

}


export default Detail