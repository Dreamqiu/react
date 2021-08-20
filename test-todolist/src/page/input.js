import { PureComponent } from 'react'


class Input extends PureComponent{
    state = {
        value: ""
    }
    render(){
        return(
            <input 
                className="creatInput" 
                type="text"
                value={this.state.value}
                placeholder="输入待完成事项"
                onKeyDown={(e)  => {
                    let evt = window.event || e
                    let { value } = this.state
                    let { onSubmit } = this.props
                    if(evt.keyCode === 13){
                        if(!value.trim()){
                            alert('请输入内容')
                            return
                        }
                        this.setState({
                            value: ""
                        })
                        onSubmit(value)
                    }
                }} onChange={(e) => {
                    this.setState({
                        value:e.target.value
                    })
                }}
            />
        )
    }
}

export default Input