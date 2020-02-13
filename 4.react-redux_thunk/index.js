import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from  'react-redux'

// ReactDOM.render(<App store={store}/>,document.getElementById('root'))
 //只要redux状态改变就调这个函数
    //订阅\监听
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root'))



