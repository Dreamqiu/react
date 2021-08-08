import { PureComponent } from "react";
import './index.css'
import Title from './title'

class Todo extends PureComponent{
    render(){
        return(<div className="todoList">
            <Title />
        </div>)
    }
}

export default Todo