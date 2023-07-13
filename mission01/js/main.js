
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



//email 정규표현식을 사용한 조건처리 
const inputEmail = document.querySelector('.user-email-input');
const inputPw = document.querySelector('.user-password-input');
const button = document.querySelector('button');
const errorMessageId = document.querySelector('#userEmailError')
const errorMessagePw = document.querySelector('#userPasswordError')

let valueEmail = inputEmail.value;
let emailPass = false;

inputEmail.addEventListener('input',()=>{
  valueEmail = inputEmail.value;
  console.log(valueEmail)
  if(emailReg(valueEmail)){
    emailPass = true;
    errorMessageId.classList.remove('is--invalid')
  }else{
    emailPass = false;
    errorMessageId.classList.add('is--invalid')
  }
  return emailPass
})



//pw 정규표현식을 사용한 validation

let valuePw = inputPw.value;
let passwordPass = false;

inputPw.addEventListener('input',()=>{
  valuePw = inputPw.value;
  console.log(valuePw)
  valuePw = inputPw.value;
  if(pwReg(valuePw)){
    errorMessagePw.classList.remove('is--invalid')
    passwordPass = true;
  }else{
    errorMessagePw.classList.add('is--invalid')
    passwordPass = false;
    // console.log(valuePw ===  user.pw)
  }
  return passwordPass
})

// 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
//로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교

//두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
button.addEventListener('click',(e)=>{
  e.preventDefault()
  if(emailPass && passwordPass){
    console.log(valueEmail);
    console.log(valuePw);
    if(valueEmail === user.id && valuePw === user.pw){
      window.location.href = 'welcome.html';
    }else{
      console.log('아이디와 비밀번호를 확인해주세요')
    }
    
  }
})







