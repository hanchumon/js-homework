import { getNode, getNodes, attr, clearContents, insertLast, css } from "../lib/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const container = getNode('.container');
const list = getNodes('.container ul li')
const posterImage = getNode('.visual img')



function handleClick(e) {
  e.preventDefault();

  const h1 = getNode('h1')
  let target = e.target.closest('li');
  let navImage = e.target.closest('.nav img');
  
  if(!target || !navImage || !list) return;
  
  let index = attr(target, 'data-index')
  let backgroundColor1 = data[index-1].color[0]
  let backgroundColor2 = data[index-1].color[1]

  
  list.forEach((item)=>item.classList.remove('is-active'))
  
  
  // clearContents('h1')
  target.classList.add('is-active')
  


  // insertLast('h1',data[index-1].name)
  h1.textContent = data[index-1].name
  attr(posterImage, 'alt', data[index-1].alt);
  attr(posterImage, 'src', navImage.src);
  if(!backgroundColor2){
    css('body','background',`linear-gradient(to bottom, ${backgroundColor1}, #000`)
  }else{
    css('body','background',`linear-gradient(to bottom, ${backgroundColor1}, ${backgroundColor2})`)
  }
}





container.addEventListener('click',handleClick)








