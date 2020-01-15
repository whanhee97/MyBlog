function add_list(){ 
    var vinput = document.getElementById('input_bar'); //vinput은 HTMLInputElement 이걸로 알수있음 -> console.log(vinput.constructor.name);
    if(!vinput.value){ //js에서 비어있는걸 확인할 때에는 !을 쓴다.
        alert("할 일을 입력해주세요!");
        vinput.focus();
        return false;
    }
    
    // 방식1
    var tr = document.createElement('tr'); // tr엘리먼트를 만든다.
    var input = document.createElement('input'); //인풋 엘리먼트(체크박스)를 만든다
    input.setAttribute('type','checkbox');
    input.setAttribute('class','btn-check');
    input.setAttribute('onclick','underbar(this)');

    var td1 = document.createElement('td'); //td엘리먼트를 만들고
    td1.appendChild(input); //체크박스 집어넣기
    
    tr.appendChild(td1); //행에다가 열1 넣기
    
    var td2 = document.createElement('td'); // td하나 더 만들고
    td2.innerHTML = vinput.value; //입력값 집어넣기


    tr.appendChild(td2); //행에다가 열2 넣기

    document.getElementById('todobody').appendChild(tr); //todobody에 tr추가
    vinput.value = ''; // 인풋박스 초기화
    vinput.focus(); // 포커스 효과

    /* 방식2
    var m_tbody = document.getElementById('todobody'); // 추가할 테이블바디
    var row = m_tbody.insertRow(m_tbody.rows.length);// 추가할 행 마지막단에 추가
    var cell1 = row.insertCell(0);  //실제 행 추가 여기서의 숫자는 컬럼 수
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "<td><input type='checkbox'></td>";
    cell2.innerHTML = vinput;
    */

}

function selectDelete_list(){ // 선택된 행 삭제
    var checkboxes = document.getElementsByClassName('btn-check'); // 체크박스들의 엘리먼트를 배열로 가져온다.
    var body = document.getElementById('todobody');
    var checkedboxes = [];
    for(index in checkboxes){
        if(checkboxes[index].checked === true){
            checkedboxes.push(checkboxes[index]);
        }
    } // 여기까지 과정이 checkedboxes라는 배열에 체크가된 박스들을 모아 놓는 작업
    for(index in checkedboxes){
        body.removeChild(checkedboxes[index].parentNode.parentNode);
    } // 모아놓은 배열을 하나씩 삭제 해줌
      // checkedboxes[index].parentNode -> td
      // checkedboxes[index].parentNode.parentNode -> td.parentNode -> tr

}

function lastDelete_list(){ // 마지막 항목 삭제
    var body = document.getElementById('todobody');
    var checkboxes = document.getElementsByClassName('btn-check'); // 체크박스들을 다 가지고와서
    var last_checkbox = checkboxes[checkboxes.length-1]; // 마지막 인덱스의 체크박스를 라스트 체크박스에 넣고
    body.removeChild(last_checkbox.parentNode.parentNode); // last_checkbox.parentNode.parentNode(= td.parentNode = tr) 을 삭제해준다.
}

function deleteAll_list(){ // 모든 항목 삭제
    var body = document.getElementById('todobody');
    var bodychild = body.children; //body.childNodes의 경우 text공백도 노드로 가져온다. 이때 children을 쓰면 하위 엘리먼트만 가져온다.
    
    for(var i = 0;i<bodychild.length;i++){
        body.removeChild(bodychild[i]); // 여기까지만 하면 하나가 삭제되면서 값이 밀림. for문을 돌리는 동시에 삭제하는 것이므로
        i--; // 따라서 지워줄때마다 i를 하나씩 줄여주므로써 bodychild[0]만을 제거 -> 몇개안지워지는 현상 해결
    }
}

function underbar(box){ // box는 이벤트 객체로 체크박스를 의미
    var child_list = box.parentNode.parentNode.children; // 체크박스의 부모의 부모는 tr이고 그것의 children은 td들
    var text = child_list[child_list.length-1]; // td중 마지막 친구를 text에 넣어줌
    if(box.checked === true){ 
        text.style.textDecoration = "line-through"; //js에서 css는 style속성을통해 제어, text-decoration의 경우 붙이고 d를 대문자로
    }
    else{
        text.style.textDecoration = "none";
    }
}

function add_listBykb(event){
    if(event.keyCode !== 13)return; //13이 엔터키(keycode.info)
    else{
        add_list();
    }
}

var inputs = document.querySelectorAll('.control input');

function UpdateInput(){
    var suffix = this.dataset.sizing || ''; //suffix는 단위, dataset은 태그속성중 data-??관련해서 준 속성값
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    
}

inputs.forEach(input => input.addEventListener('change',UpdateInput)); //inputs에는 엘리먼트들이 배열로 들어와있어서 forEach를 통해 각각 이벤트리스너를 추가해준다.
inputs.forEach(input => input.addEventListener('mousemove',UpdateInput));



//이벤트 리스너를 추가시키는 작업
document.getElementById('add_button').addEventListener('click', add_list); // 항목추가
window.addEventListener('keydown',add_listBykb);

document.getElementById('select_delete').addEventListener('click', selectDelete_list); // 선택 삭제
document.getElementById('last_delete').addEventListener('click', lastDelete_list); // 마지막 삭제
document.getElementById('all_delete').addEventListener('click', deleteAll_list); // 전체 삭제