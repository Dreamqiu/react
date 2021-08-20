import { PureComponent } from 'react'

class Status extends PureComponent{
    done = () => {
        let { data } = this.props
        let list = data.filter(item => item.selected === true)
        return list
    }
    noDone = () =>  {
        let { data } = this.props
        let list = data.filter(item => item.selected === false)
        return list
    }
    render(){
        let { clearAll } = this.props
        return(
            <div className="status">
                <div>
                    <span>{ this.noDone().length }</span>
                    <span>项待完成</span>
                </div>
                {this.done().length > 0 ?  
                <div className="clear-all" onClick={ () => {
                    clearAll()
                }}>
                    <span>Clear</span>
                    <span>{this.done().length}</span>
                    <span>项已完成</span>
                </div>
                : ''}
                
            </div>
        )
    }
}

export default Status