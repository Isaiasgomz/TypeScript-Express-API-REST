import express from "express";
import * as diaryServices from '../services/diaryServices'


const router = express.Router()

router.get('/', (_req,res)=>{
res.send(diaryServices.getEntriesWinthoutSensitiveInfo())
})

router.get('/:id', (req,res)=>{
const  diary = diaryServices.findById(+req.params.id)
res.send(diary)
})



router.post('/', (req,res)=>{
 const { date ,weather ,visibility ,comment} = req.body
 const newDiaryEntry = diaryServices.addDairy({date,weather,visibility,comment})
 res.send(newDiaryEntry)
})

export default router