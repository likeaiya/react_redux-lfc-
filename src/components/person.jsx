import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div>
                <h2>当前总人数为:xxxx</h2>
                <input type="text" placeholder='输入名字'/>
                <input type="text" placeholder='输入年龄'/>
                <button>添加</button>
                <ul>
                    <li>姓名:xxx, 年龄:yyy</li>
                    <li>姓名:xxx, 年龄:yyy</li>
                    <li>姓名:xxx, 年龄:yyy</li>
                </ul>
            </div>
        )
    }
}
