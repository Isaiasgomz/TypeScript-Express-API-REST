"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parsedComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment ');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRquest) => {
    if (!isString(weatherFromRquest) || !isWeather(weatherFromRquest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRquest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorect or  missing Visibility');
    }
    return visibilityFromRequest;
};
const isWeather = (param) => {
    return Object.values(enums_1.weather).includes(param);
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isVisibility = (param) => {
    return Object.values(enums_1.visibility).includes(param);
};
const toNewDairyEntry = (object) => {
    const newEntry = {
        comment: parsedComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDairyEntry;
