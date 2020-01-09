document.getElementById('add_button').addEventListener('click', add_list); // 항목추가
//document.getElementById('select_delete').addEventListener('click', delete_list); // 선택 삭제
//document.getElementById('last_delete').addEventListener('click', delete_list); // 마지막 삭제
//document.getElementById('all_delete').addEventListener('click', delete_list); // 전체 삭제

function add_list(event){ // 이벤트 객체
    var vinput = document.getElementById('input_bar').value; //vinput은 HTMLInputElement 이걸로 알수있음 -> console.log(vinput.constructor.name);
    if(!vinput){ //js에서 비어있는걸 확인할 때에는 !을 쓴다.
        alert("할 일을 입력해주세요!");
    }
    else{
        var m_tbody = document.getElementById('todobody'); // 추가할 테이블바디
        var row = m_tbody.insertRow(m_tbody.rows.length);// 추가할 행 마지막단에 추가
        var cell1 = row.insertCell(0);  //실제 행 추가 여기서의 숫자는 컬럼 수
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "<td><input type='checkbox'></td>";
        cell2.innerHTML = vinput;

    }
} 