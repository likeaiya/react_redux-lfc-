//该文件是recuder,视为person组件服务的reducer,所以名为person-reduce

import {ADDPERSON} from '../action-types'

export default function (preState=[{name:'lisan',age:16}],action){//如果没有传过来preState(初始化的时候)
    console.log(action);
    //从action中获取:type\data
    const {type,data} = action
    //提前准备好一个新状态
    let newState 
    
    
    //用swich判断type(到底是加还是减)
    switch (type) {        
        //如果是加法操作
        case ADDPERSON:
            newState=[data,...preState]
            return newState
       
        default:
            return preState
    }
}