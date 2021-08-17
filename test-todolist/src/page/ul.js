import { PureComponent } from 'react'
import Li from './li';

class Ul extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        let {data} = this.props
        
        return(<div>
            <div>已完成</div>
            
                <Li finished={data}/>
            
            {/* <div>未完成</div>
            <ul>
                <Li notFinish={data}/>
            </ul> */}
        </div>)
    }
}

export default Ul