import { newDairyEntry } from "./types";
import {weather,visibility} from './enums'

const parsedComment = (commentFromRequest: any) =>{
    if(!isString(commentFromRequest) ){
        throw new Error('Incorrect or missing comment ')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest:any): string =>{
    if(!isString(dateFromRequest) || isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRquest: any):weather =>{
    if(!isString(weatherFromRquest) || !isWeather(weatherFromRquest)){
        throw new Error('Incorrect or missing Weather')
    }
    return weatherFromRquest
}


const parseVisibility = (visibilityFromRequest: any): visibility =>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error ( 'Incorect or  missing Visibility')
    }

    return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
    return Object.values(weather).includes(param)
}

const isString = (string:string): boolean =>{
    return typeof string === 'string'
}

const isDate = (date : string): boolean =>{
    return Boolean(Date.parse(date))
}

 const isVisibility = (param: any): boolean =>{
     return Object.values(visibility).includes(param)
 } 




const toNewDairyEntry = (object: any):newDairyEntry =>{
    const newEntry : newDairyEntry = {
        comment: parsedComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}

export default toNewDairyEntry