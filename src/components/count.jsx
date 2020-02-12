import React, { Component } from 'react'
// import store from '../redux/store'
// import {INCREMENT,DECREMENT} from '../redux/action-types'
import {createIncrementAction,createDecrementAction} from '../redux/count-action-creator'


export default class Count extends Component {

    // 加
    increment =()=>{
        //1.获取用户选择的数字    
        const value = this.refs.checkNumber.value
        // 2.更新状态
        // const number = this.state.number
        // this.setState({number:number+value*1})

        //2.调用了从容器组件传递过来的加法函数
        this.props.increment(value*1)


    }
    
    //减
    decrement =()=>{
          //1.获取用户选择的数字    
          const value = this.refs.checkNumber.value
          // 2.更新状态
        //   const number = this.state.number
        //   this.setState({number:number-value*1})
        
        //2.调用dispatch分发一个'减'的action
        // this.props.store.dispatch({type:DECREMENT,data:value*1})
        // this.props.store.dispatch(createDecrementAction(value*1))
        

        //2.调用了从容器组件传递过来的加法函数
        this.props.decrement(value*1)
    }
    //奇数才加
    incrementOdd =()=>{
          //1.获取用户选择的数字    
          const value = this.refs.checkNumber.value
        //如果当前展示的数字是奇数,就可以加
        const number = this.props.number
          if(number%2 === 1){
              this.props.increment(value*1)
          }
      
    }
    //延迟一会加
    incrementAsync =()=>{
       
         //1.获取用户选择的数字    
         const value = this.refs.checkNumber.value
         // 2.更新状态
        //  setTimeout(()=>{
        //      this.props.increment(value*1)
        //  },1000)

        this.props.incrementAsync(value*1,4000)
       
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                
        <h4>当前计数为:{this.props.number}</h4>
                <select ref="checkNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
