import express from 'express'
import cors from 'cors'
import empRouter from './router/empRouter.js'
const server = express();

const PORT = 8000; //대문자는 상수로 정해놓고 쓰는 변수

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(cors());
server.use('/', empRouter)
//cors()가 없으면 도메인이 다를 때(포트포함) 데이터를 주고받지 못한다
//cors()는 가장 상위인 server.js에서 사용하면 된다.
// server.get('/',(req,res)=>{
//   console.log('111111');
//   res.json({name:'hong'})
// });
// http://127.0.0.1:8000










server.listen(PORT,()=>{console.log(`server start -----> server Port :${PORT}`);});