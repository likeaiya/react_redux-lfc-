// import { INCREMENT } from "./action-types";

//本文件专门用于创建action对象


import {ADDPERSON} from '../action-types'


export const createADDPersonAction = (personObj) => ({type:ADDPERSON,data:personObj})
