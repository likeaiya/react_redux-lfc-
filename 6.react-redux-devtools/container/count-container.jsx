//本文件是count组件的容器组件,用于给count组件传递: 1.状态  2.操作状态的方法

//引入UI组件
import Count from '../components/count'
//引入connect方法
import {connect} from 'react-redux'
// 引入action-creator
import {
     createIncrementAction,
     createDecrementAction ,
     createIncrementAsyncAction
    } from '../redux/action-creators/count-action-creator'



//关于connect
//1.调用connect函数可以传递两个回调函数 ,第一个用于传递状态,第二个用于传递操作状态的方法
//2.两个回调函数均要求返回一个对象
//3.connect函数调用所返回的那个函数能够生成一个容器组件
//4.connect函数能让UI组件和容器组件建立起联系

//备注:调用connect也可以传递:一个回调函数、一个对象
export default connect(
    state=>({number:state.number}), //传递(映射)状态给UI组件

    //给UI组件传递(映射)操作状态的方法的完整写法
    // dispatch=>({ //传递(映射)操作状态的方法给UI组件
    //     increment: value=>dispatch(createIncrementAction(value)),
    //     decrement: value=>dispatch(createDecrementAction(value)),

    // })


    //给UI组件传递(映射)状态的方法的精简写法------对象
    //该种写法经过connect方法会转换为上面的完整版写法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction,
    }


)(Count)

