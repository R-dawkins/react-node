import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"
import axios from 'axios'
const url = 'http://127.0.0.1:8000/'
export default function EmpList(){
// console.log(empList.empList); {empList:[]} 객체 안에 배열 접근할 때
const [empList, setEmpList] = useState([]); // [배열]을 기본으로 주지 않으면 내부 컴포넌트에서 데이터를 받기 전에 undefined를 map으로 돌리게 되어 오류 발생
  useEffect(()=>{
    axios.get(url) // 서버에서 결과값이 객체로 전송 --> {data : {서버결과}} 무조건 data안에 결과가 포함되어서 오기 때문에
    .then(res=>{ //{res : {data {서버결과}}
      console.log(res.data) //res.data.으로 접근
      setEmpList(res.data)
    }) 
    .catch(console.error); 
    /* 
    fetch(url) // 결과값이 문자로 전송 ==> {name:'hong'}
    .then((res)=>res.json()) JSON 객체로 변환
    .then((data)=>{
      console.log(data); {data : {name:'hong'}} -> data.name으로 접근해야함
      setName(data.name);
    })
    */
  },[]);
  return(
    <div>
      <h1>Employees</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>사원아이디</th>
            <th>사원명</th>
            <th>입사일</th>
            <th>부서</th>
            <th>폰번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((list)=>
          <tr key={list.rownum}>
            <td>{list.rownum}</td>
            <td>{list.emp_id}</td>
            <td>{list.emp_name}</td>
            <td>{list.hire_date}</td>
            <td>{list.dept_id}</td>{/* 서버에 연결된 db의 sql 쿼리에서 dept_name에 dept_id 별칭을 부여하여 front에서 수정할 필요 없게 만들었음 적힌것은 dept_id이나 내용은 dept_name */}
            <td>{list.phone}</td>
            <td>{list.email}</td>
          </tr>
          )}
        </tbody>
      </Table>
      </div>
  );
}