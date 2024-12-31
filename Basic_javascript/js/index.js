function 알림창열기(show, txt){
    document.getElementById('alert').style.display = show
    document.getElementsByClassName('txt')[0].innerText = txt
}

// function 알림창닫기(){
//     document.getElementById('alert').style.display = 'none'
// }

document.getElementById("close").addEventListener('click', function(){  // 파라미터에 함수 ==  콜백 함수(뭔가 순차적으로 진행한다,)
    document.getElementById('alert').style.display = "none"
})

document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
   document.getElementsByClassName('list-group')[0].classList.toggle('show') 
})


document.querySelector('.login-btn').addEventListener('click', function(){
     document.querySelectorAll('.black-bg')[0].classList.add('show-modal')
})

document.querySelector('.black-bg .btn-danger').addEventListener('click', function(){
    document.querySelectorAll('.black-bg')[0].classList.remove('show-modal')
})
