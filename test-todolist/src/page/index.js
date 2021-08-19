import React, { PureComponent } from "react";
import './index.css'
import Title from './title'
import Input from "./input";
import Ul from './ul'
import Status from "./status";

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
            data:[{id: 0, selected: false, value: "的说法"}]
        }
        
    }
    // input 按回车键添加数据
    onSubmit(value) {
        let {data} = this.state
        data.unshift({
            id:data.length,
            selected:false,
            value:value 
        })
        this.setState({
            data:data,
        })
        console.log("33",data)
    }
    editItem(id,value){

    }
    changeselected(id,selected){
        console.log(id,selected)
    }
    render(){
        let {data} = this.state
        
        return(<div className="todoList">
            <Title />
            <Input onSubmit={(value) => this.onSubmit(value)}/>
            {
                data.length <1 ? "" : [
                    <Ul
                        key={1}
                        data={data}
                        editItem={this.editItem.bind(this)}
                        changeselected={this.changeselected.bind(this)}
                    />,
                    <Status
                        key={2}
                        data={data} 
                    />
                ]
            }
            
        </div>)
    }
}

export default Todo