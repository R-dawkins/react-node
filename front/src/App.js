import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import EmpList from './components/EmpList';
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap css import

// const url = 'http://127.0.0.1:8000/'
//fetch(url) 결과값이 문자로 전송 ==> {name : 'hong'} 문자로 그대로 넘어옴
//.then(res=>res.json()) json 객체로 변환 필요
//.then(a=>{console.log(a)}) {a : {name:'hong'}} a라는 객체 안에 객체로 변환됨(res.json()으로 객체로 바꾼 후 그 데이터를 a로 명명했을 시) a.name
//
//axios.get(url) // 결과값이 객체로 전송 {data :{name:'hong'}}
// 객체로 변환 필요 없음

function App() {
  // const [empList, setEmpList] = useState([]); // [배열]을 기본으로 주지 않으면 내부 컴포넌트에서 데이터를 받기 전에 undefined를 map으로 돌리게 되어 오류 발생
  // useEffect(()=>{
  //   axios.get(url) // 서버에서 결과값이 객체로 전송 --> {data : {서버결과}} 무조건 data안에 결과가 포함되어서 오기 때문에
  //   .then(res=>{ //{res : {data {서버결과}}
  //     console.log(res.data) //res.data.으로 접근
  //     setEmpList(res.data)
  //   }) 
  //   .catch(console.error); 
  //   /* 
  //   fetch(url) // 결과값이 문자로 전송 ==> {name:'hong'}
  //   .then((res)=>res.json()) JSON 객체로 변환
  //   .then((data)=>{
  //     console.log(data); {data : {name:'hong'}} -> data.name으로 접근해야함
  //     setName(data.name);
  //   })
  //   */
  // },[]);
  return (
    <EmpList 
      // empList = {empList} //넘어갈 때 객체로 포장되어 넘어감 결론적으로 객체 안에 empList라는 배열이 들어가게됨
    />
  );
}

export default App;
