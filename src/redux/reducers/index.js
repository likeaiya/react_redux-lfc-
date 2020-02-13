//该文件用于汇总所有的reducer

import countReducer from './count-reduce'
import PersonReducer from './person-reduce'

import {combineReducers} from 'redux'

//combineReducers用于合并多个reducer,最终生成一个总的reducer
export default combineReducers({
    number:countReducer,
    person:PersonReducer
})
//
// countReducers传入的对象,就是redux帮我们保存的那个状态对那还好

