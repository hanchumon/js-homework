import { getNode, getNodes, attr, clearContents, insertLast, css } from "../lib/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const container = getNode('.container');
const h1 = getNode('h1')
const list = getNodes('.container ul li')
const posterImage = getNode('.visual img')


function setNameText(node, index){
  if (node === 'string') node = getNode(node)
  node.textContent = data[index-1].name
}

function setImage(target, index){
  attr(target, 'alt', data[index-1].alt);
  attr(target, 'src', `./assets/${data[index-1].name}.jpeg`);
}

function setBgColor(node, backgroundColor1, backgroundColor2 = '#000'){
  if (node === 'string') node = getNode(node)
  css(node,'background',`linear-gradient(to bottom, ${backgroundColor1}, ${backgroundColor2})`)
}


function handleClick(e) {
  e.preventDefault();
  
  let target = e.target.closest('li');
  
  if(!target || !list) return;
  
  let index = attr(target, 'data-index')
  let backgroundColor1 = data[index-1].color[0]
  let backgroundColor2 = data[index-1].color[1]

  list.forEach((item)=>item.classList.remove('is-active'))
  
  target.classList.add('is-active')
  
  setNameText(h1, index)
  setImage(posterImage, index)
  setBgColor('body', backgroundColor1, backgroundColor2)

}

container.addEventListener('click',handleClick)








