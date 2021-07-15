import React, { Component } from 'react'
import  {appState} from './Data'
export class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:'',
             todoItems:[]
        }
    }
  
    onChange=(event)=>{
        var inputVal=event.target.value

        this.setState({
            items:inputVal
        })
    }

    addData=()=>{
        var inputVal=this.state.items;
        var itemInstance=this.state.todoItems;
        itemInstance.push(inputVal)
        this.setState({
            todoItems:itemInstance
        })
        console.log(this.state.todoItems)
    
    }
    
    
    render() {
        var itemList=this.state.todoItems.map((e,i)=>{
          return  <li key={i}>{e}</li>
        })
        return (
            <div>
                <form onSubmit={this.handlesubmit} >
                <div class="input-group mb-3 ">
                        <input type="text" class="form-control" placeholder="New List" name="newlist" value={this.state.items}  onChange={this.onChange}/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={this.addData}>+Add</button>
                        </div>
                     </div>

                     <ul>
                         <li>
                             {itemList}
                         </li>
                     </ul>
                </form>
            </div>
        )
    }
}

export default Demo
