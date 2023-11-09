import { db } from "../db/database.js";

export async function getEmp(){
  return db
  .execute('select row_number() over(order by emp_id) rownum,emp_id,emp_name,left(hire_date,10) hire_date,dept_name as dept_id,phone,email from employee e, department d where e.dept_id = d.dept_id')
  .then(result=>result[0])
  //sql 쿼리문에서 dept_name에 dept_id라는 별칭을 주어 front쪽에서 수정을 하지 않게 만들 수 있다.
}