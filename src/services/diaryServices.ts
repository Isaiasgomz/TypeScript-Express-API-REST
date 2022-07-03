import diaryData from './diaries.json'
import {DiaryEntry, newDairyEntry, NonSensitiveInfoDiaryEntry} from '../types'

const diaries : Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = ():Array<DiaryEntry> => diaries



export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find( d => d.id === id )
    if(entry) {
        const { comment, ...restOfDairy} = entry
        return restOfDairy
    }
    return undefined
}


export const getEntriesWinthoutSensitiveInfo = ():Array<NonSensitiveInfoDiaryEntry> => {
    return diaries.map( ({id,date , weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    }
    )
}
    


export const addDairy = (newDairyEntry: newDairyEntry): DiaryEntry => {
    const newDairy = {
        id: Math.max(...diaries.map(d => d.id))+1,
        ...newDairyEntry
    }

    diaries.push(newDairy)

    return newDairy
}