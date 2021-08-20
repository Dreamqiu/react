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
 * 1.data 通过事件更新后怎么传递重新传递给子组件-----------会自动更新数据放在state中，要注意setState更改一下
 * 2.列表循环，
 * 3.控制元素的显示与隐藏，第一种用三目运算符，第二种用css中的display属性
 */

class Todo extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            data:[{id: 0, selected: false, value: "22222222"},
            {id: 1, selected: true, value: "3333333"}]
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
            data:data.map(item => ({...item}))
        })
        
    }
    // 双击编辑
    editItem(id,value){
        let {data} = this.state
        data.forEach( item => {
            if(item.id === id){
                item.value = value
            }
        })
        this.setState({
            data:data.map(item=>({...item}))
        });
    }
    // 选中复选框
    changeselected=(id,selected)=>{
        let {data} = this.state
        data.forEach(item => {
            if(id === item.id){
                item.selected = selected
            }
        })
        this.setState({
            data:data.map(item=>({...item})) // 为什么要一项一项的改变data的值
            // data:data
        });
    }
    // 删除单项已完成
    deleteItem=(id) =>{
        let {data} = this.state
        data = data.filter(item => item.id !== id)
        this.setState({
            data
        })
    }
    // 删除多项已完成
    clearAll(){
        let {data} = this.state
        data = data.filter(item =>  item.selected === false)
        this.setState({
            data
        })
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
                        changeselected={this.changeselected}
                        deleteItem ={this.deleteItem}
                    />,
                    <Status
                        key={2}
                        data={data} 
                        clearAll={ () => this.clearAll()}
                    />
                ]
            }
            
        </div>)
    }
}

export default Todo