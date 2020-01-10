document.getElementById('add_button').addEventListener('click', add_list); // 항목추가
document.getElementById('select_delete').addEventListener('click', selectDelete_list); // 선택 삭제
//document.getElementById('last_delete').addEventListener('click', delete_list); // 마지막 삭제
//document.getElementById('all_delete').addEventListener('click', delete_list); // 전체 삭제

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
