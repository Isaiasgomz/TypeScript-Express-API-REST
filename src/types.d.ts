export type weather = 'sunny'| 'rainy'| 'cludy'| 'windy' | 'stormy'

export type visibility = 'great'| 'good'| 'ok'| 'poor'

export interface DiaryEntry {
    id: number
    date: string
    weather: weather
    visibility: visibility
    comment: string
}


export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment' >

export type newDairyEntry = Omit<DiaryEntry, 'id'>