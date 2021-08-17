import { PureComponent } from 'react'

export default class Li  extends PureComponent{

    render(){
        const listItems = this.props.finished.map( (item) => 
            <li key={item.id}>{item.value}</li>
        )
        return(<ul>
            {listItems}
        </ul>)
    }
}
