// 此文件是整个redux中最为核心的文件---store


//引入createStore,用户创建一个store对象
import {createStore} from 'redux'
//引入reducer,用于操作状态
import countReducer from './count-reduce'



//调用createStore时,必须传入一个reducer----老板在创业的时候就找好了手下
export default createStore(countReducer)
