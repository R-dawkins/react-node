import * as empRepository from '../repository/empRepository.js'

export async function getEmp(req,res){
  const rows = await empRepository.getEmp();
  res.json(rows)
}