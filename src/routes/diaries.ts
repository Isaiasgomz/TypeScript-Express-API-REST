import express from "express";
import * as diaryServices from '../services/diaryServices'
import toNewDairyEntry from "../utiils";


const router = express.Router()

router.get('/', (_req,res)=>{
res.send(diaryServices.getEntriesWinthoutSensitiveInfo())
})

router.get('/:id', (req,res)=>{
const  diary = diaryServices.findById(+req.params.id)
res.send(diary)
})



router.post('/', (req,res)=>{
    try {
    const newDairyEntry = toNewDairyEntry(req.body)
    const addedDiaryEntry = diaryServices.addDairy(newDairyEntry)
    res.send(addedDiaryEntry)
    } catch(e){
        res.status(400).send('e.message')
    }
 
})

export default router