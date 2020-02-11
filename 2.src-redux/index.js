import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App store={store}/>,document.getElementById('root'))
 //只要redux状态改变就调这个函数
    //订阅\监听
store.subscribe(()=>{
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})