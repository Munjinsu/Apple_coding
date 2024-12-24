import { useParams } from "react-router-dom"
import styled from 'styled-components'


/* styled-components */
let Btn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'tomato' ? 'white' : 'black'};
    padding : 10px;
`

/* 
1. 다른 js 파일로 오염되지 않음.
**** css작명시 컴퍼넌트.module.css 하면 오염 방지 가능 ****
2. 페이지 로딩시간 단축
--------------------------------------------------------
*/

function Detail(props){
    let {page} = useParams();
    page = parseInt(page)

    let findId = props.shoes.find((x)=>{  
        return x.id == page
    })
    
   /* find()는 arry 뒤에 붙일 수 있으며 return 조건식 씀, 그럼 조건에 맞는 자료만 남겨줌*/

    return(
        <div className="container">
            <Btn bg={'yellow'}>버튼</Btn>
            <Btn bg={'tomato'}>버튼</Btn>
            
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