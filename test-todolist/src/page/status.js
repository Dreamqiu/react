import { PureComponent } from 'react'

class Status extends PureComponent{
    render(){
        return(
            <div className="status">
                <div>
                    <span>1</span>
                    <span>项待完成</span>
                </div>
                <div>
                    <span>Clear</span>
                    <span>2</span>
                    <span>项已完成</span>
                </div>
            </div>
        )
    }
}

export default Status