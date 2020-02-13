// 此文件是整个redux中最为核心的文件---store


//引入createStore,用户创建一个store对象
import {createStore,applyMiddleware} from 'redux'//applyMiddleware是引入中间件
//引入reducer,用于操作状态
import reducer from './reducers'
//引入redux-thunk,用于异步编程
import thunk from 'redux-thunk' //thunk是个中间件
//引入composeWithDevTools,用于调试redux代码
import {composeWithDevTools} from 'redux-devtools-extension'

//调用createStore时,必须传入一个reducer----老板在创业的时候就找好了手下
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

