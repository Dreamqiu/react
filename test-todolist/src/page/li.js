import { PureComponent } from 'react'

export default class Li  extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            text: ""
        }
    }
    static getDerivedStateFromProps(props, state){
        //console.log(props,state); 
        /*
            getDerivedStateFromProps让组件在props更新时，同步更新state
            1. 挂载时：同步 state 中的val 和 props.txt
        */
        if(!state.edit){
            state.text = props.list.value;
        } 
        return true;
    }
    render(){
        let {list,editItem, changeselected, deleteItem} = this.props
        let { value,id,selected } = list
        let { edit,text } = this.state
        return(<li className={edit?"editing":""}>
            <div className={"todo todo-none"}>
                <div>
                    <input type="checkbox" 
                        checked={selected}
                        onChange={(e)=>  {
                            changeselected(id, e.target.checked)
                        }}
                    />
                    <span className={selected ? "selected" : ""} onDoubleClick={()  => {
                        if(selected === false){
                            this.setState({
                                edit:true
                            })
                        }
                        
                    }}>{value}</span>
                </div>
                <div className={ selected ? "deleteIcon" : "no-show-delete"}
                    onClick={()=> {
                        deleteItem(id)
                    }}
                >x</div>
            </div>
            <div className="edit-none">
                <input 
                    type="text"
                    className="creatInput" 
                    value={text}
                    onChange={(e) => {
                        this.setState({
                            text: e.target.value
                        })
                    }}
                    onBlur={() => {
                        this.setState({
                            edit: false
                        })
                        editItem( id, text)
                    }}
                />
            </div>
        </li>)
    }
}
