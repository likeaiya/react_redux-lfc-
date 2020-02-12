//该文件是recuder,视为count组件服务的reducer,所以名为count-reduce

import {INCREMENT,DECREMENT} from './action-types'

export default function (preState=0,action){//如果没有传过来preState(初始化的时候)
    console.log(preState,action);
    //从action中获取:type\data
    const {type,data} = action
    //提前准备好一个新状态
    let newState 
    
    
    //用swich判断type(到底是加还是减)
    switch (type) {        
        //如果是加法操作
        case 'INCREMENT':
            newState=preState + data  //相加
            return newState//返回新状态
        //如果是减法操作
        case 'DECREMENT':
            newState=preState - data  //相减
            return newState//返回新状态
            //也不是加也不是减,即:是初始化的时候
        default:
            return preState
    }




}