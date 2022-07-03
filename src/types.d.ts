import {weather,visibility} from './enums'
export interface DiaryEntry {
    id: number
    date: string
    weather: weather
    visibility: visibility
    comment: string
}


export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment' >

export type newDairyEntry = Omit<DiaryEntry, 'id'>