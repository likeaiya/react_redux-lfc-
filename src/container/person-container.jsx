//该文件是person组件的容器组件,用于给person组件传递:

//引入UI组件
import Person from '../components/person'
//引入connect
import {connect} from 'react-redux'
//引入action
import {createADDPersonAction} from '../redux/action-creators/person-action-creator'
export default connect(
    (state)=>({
        persons:state.persons,
        number:state.number
    
    }),  //映射状态   ---如果没有什么东西要传,name返回空对象
    {addPerson:createADDPersonAction}   //映射操作状态的方法   - ---如果没有什么东西要传,name返回空.
)(Person)