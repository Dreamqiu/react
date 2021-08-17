import React, { PureComponent } from "react";
import './index.css'
import Title from './title'
import Ul from './ul'

/**
 * 列表数据格式
 * data =  [{
 *  id:0,
 *  selected:false,
 *  value:""
 * }]
 */
/**
 * 1.data 通过事件更新后怎么传递重新传递给子组件
 * 2.列表循环
 */

class Todo extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            value:"默认值",
            data:[]
        };
        this.input = React.createRef();
    }
    onSubmit(e) {
        let {data} = this.state
        let evt = window.event || e;
        if (evt.keyCode === 13) {
            console.log('按下了回车键',this.input.current.value)
            if(this.input.current.value){
                data.push({id:data.length,selected:false,value:this.input.current.value })
                this.input.current.value = ""
            }
            console.log(data,"data")
        }
    }
    render(){
        let {data} = this.state
        
        return(<div className="todoList">
            <Title />
            <input type="text" onKeyDown={(e)=> this.onSubmit(e)} ref={this.input}/>
            <Ul data={data}/>
        </div>)
    }
}

export default Todo