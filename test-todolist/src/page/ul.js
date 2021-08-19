import { PureComponent } from 'react'
import Li from './li';

class Ul extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        let {data} = this.props
        
        return(
            <ul>
                {data.map(item => {
                    return <Li list={item} key={item.id} {...this.props}/>
                    // {...this.props} 将props传递下去
                })}
            </ul>
        )
    }
}

export default Ul