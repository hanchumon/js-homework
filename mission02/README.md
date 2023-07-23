# Elemental poster 선택 페이지 구현


---

각 항목을 눌렀을 때 포스터 이미지/배경/제목이 변경될 수 있도록 구현합니다.


---
- [x] `delegation`을 이용하여 이벤트를 설계하는 방법에 대해 학습합니다.

---


### 구현순서
1. `delegation`을 이용하여 구현 할 예정이기 때문에 `html`에서 전체를 감싸고 있는 `.container`를 전역변수로 설정한다.


2. 이벤트 함수를 만들고 실행부를 설계한다.


3. 이벤트함수 내부에 `.is-active` 클래스를 추가해주기 위해 `target`변수를 이벤트 함수 내부에 지역변수로 설계한다. 기존 버튼 타입이 `submit` 이기 때문에 기본 이벤트를 제거하는 `e.preventDefault();`를 추가해준다.


4. `classList.add`를 이용하여 `is-active`클래스를 추가해준다.
```js
  target.classList.add('is-active')
```

5. `classList.remove`를 이용하여 `is-acitve`클래스를 전체적으로 제거해주기 위해 유틸함수인 `getNodes`를 이용해 `nodeList`를 받아온다. `nodeList`는 유사배열이므로 `forEach`문을 사용하여 반복하여 클래스를 제거해준다.(`add`보다 위쪽에 설계)
```js
  list.forEach((item)=>item.classList.remove('is-active'))
```

6. `li`가 아닌부분은 오류가 나기 때문에 이를 해결하기 위해 `target`과 `list`가 아닌부분은 `return`하여 오류를 방지한다.
```js
  if(!target || !list) return;
```

7. `data.js`내부의 데이터를 가져오기 위해 `index`변수를 생성합니다.


8. 배경컬러가 그라데이션이므로 시작컬러와 끝나는 컬러를 변수의 값에서 받아오기위해 두개의 변수를 만들어 줍니다.


9. 함수내부에서 `setting`으로 변경해야 할 부분을 유틸함수를 이용하여 함수를 쪼개준다.


10. 이름을 바꾸는 부분은 `textContent`메서드를 사용하여 `data.name`의 `index` 값을 뽑아온다.
```js
function setNameText(node, index){
  if (node === 'string') node = getNode(node)
  node.textContent = data[index-1].name
}
```


11. 이미지를 변경하는 부분은 `attr`(속성을 세팅해주는 유틸함수)를 이용하여 `data.name`의 이름값을 가져와서 경로에 변수로 넣어준다.
```js
function setImage(target, index){
  attr(target, 'alt', data[index-1].alt);
  attr(target, 'src', `./assets/${data[index-1].name}.jpeg`);
}
```


12. 배경화면을 변경하는 부분은 `css`(css속성을 변경해주는 유틸함수)를 이용하여 변수로 지정해 뒀던 `backgroundColor`값을 가지고온다. `color2`값이 없을 경우 `#000`값이 추가 될 수있도록 기본값으로 지정한다.
```js
function setBgColor(node, backgroundColor1, backgroundColor2 = '#000'){
  if (node === 'string') node = getNode(node)
  css(node,'background',`linear-gradient(to bottom, ${backgroundColor1}, ${backgroundColor2})`)
}
```

13. 이벤트 함수 내부에 외부에 만든 함수를 실행하고 내부 `setting`값을 바꿔주는 항목이므로 `return`을 해주지 않는다.
```js
  setNameText(h1, index)
  setImage(posterImage, index)
  setBgColor('body', backgroundColor1, backgroundColor2)

```

---
### 구현하면서 바꿔보고 싶은 점
1. 애니메이션을 추가해서 슬라이딩형태로 변경되는 방식으로도 제작해보기
2. 음성파일을 활용해서 적용해보기

---
### 구현한 화면

![ezgif com-video-to-gif](https://github.com/hanchumon/js-homework/assets/116139215/e13ca548-06ea-43f2-930f-f025bcad11e7)
