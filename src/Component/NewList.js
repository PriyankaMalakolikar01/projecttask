import React, { Component } from 'react'
import './NewList.css'
import  {appState} from './Data'
import Todo from './Todo'

export default class NewList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newlist:'',
             mylist:'',
             isShow: false,
            newarr:[],
            isHide:false,
            showlist: appState[0].todo,
            selectedListDetails:[],
            newData:[]
           
        }
    };
    
             

    myhandler=(event)=>{
        
       this.setState({[event.target.name]:event.target.value});
       this.state.mylist=event.target.value
       console.log(this.state.showlist)
    }

    handler =(event)=>{
        // alert('hiiiiiiiiii')
        
        const abc=this.state.mylist
        this.setState({newarr:appState.push({name:abc,todo:[]})}) 
        // console.log(this.state.newarr[0])

   }
    handlesubmit=(event)=>{
        alert(`sucessfully submitted data`);
        console.log(this.state);
        event.preventDefault();
    }

   
    Newhandler=(e)=>{

    }
    mytag=(e)=>{
        // alert(e.target.value)
      this.setState({isShow:true})
      if(e.target.value == false)
      {
          return  this.setState({isShow:true})
      }
      else{
        return  this.setState({isShow:!this.state.isShow})
      }
    }

    addList=()=>{
          alert('add list') 
    }

    listHide=(e)=>{
            // alert('Hide List')
            this.setState({listHide:true})
            if(e.target.value == false)
      {
          return  this.setState({listHide:true})
      }
      else{
        return  this.setState({listHide:!this.state.listHide})
      }
    }


    Disply=(e)=>{
       
        // this.setState({[e.target.name]:e.target.value})
        alert(e.target.value)
        const selectedList = e.target.value;

       this.state.selectedListDetails = appState.filter( (element) => {
            return element.name === selectedList;
        })[0]
        this.setState({newData:this.state.selectedListDetails})
        // console.log(this.state.newData)
    //  this.state.newData.push(abc)
        // console.log(this.state.newData)
        
    }
    render() {
        const {newarr}=this.state;
        const {showlist}=this.state
       const {newData}=this.state
    //   const msg

       console.log(newData)
//        const abc =[]
//       abc.push(newData)
//  console.log(abc)
const display = Object.keys(newData).map((d, key) => {
    return (
      
        <li key={key}>
          {newData.todo.map((b,i)=>{
             
                  return <li>{b.name}</li>
              
          })}
          
        </li>
     
      );
    });

//  const showing= Object.keys(newData).map((x,y)=>{
//      return <li>
//           {x.name}
//      </li>
//  })
        return (
            <div>
                               <div className="input-mid"><h1>Lists</h1></div>
             <form onSubmit={this.handlesubmit} >


                <div class="input-group mb-3 ">
                <input type="text" class="form-control" placeholder="New List" name="newlist" value={this.state.newlist}  onChange={this.myhandler}/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick={this.handler}>+Add</button>
                </div>
                </div>


                <select  name="dropdown" multiple="" class="ui fluid dropdown" onChange={this.Disply}>
                  
                            {appState.map(
                                function(data, key){  return (
                                    <option key={key} value={data.name}>{data.name}</option> )
                                  }
                            )
                            }

                </select>
   

                               
                                {/* <ul>
                                        {appState.map((showlist,index)=>{
                                            // onClick={this.listHide}
                                            return  <li onClick={this.listHide}>{showlist.name} 
                                            style={this.state.isHide? {visibility: 'visible'}:{visibility: 'hidden'}}
                                            
                                               </li>
                                       })}
                                </ul> */}

                                {/* <ul type="none" >
                                               <li onChange={this.Disply} >{appState.todo.map((tt,i)=>{return  <li style={ this.state.isShow ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}> <input type="checkbox" checked={this.state.isShow} onChange={this.mytag} /> {tt.name} </li>})}</li>
                                            </ul>  */}
{/* <ul>
{appState.map((showlist,index)=>{
                                  return <li onChange={this.Disply} value={showlist.name} > {showlist.name}</li>})
                            }
</ul> */}
                                            
{/* <ul type='none'>
  <li>
  {abc.map((x,y)=>{
        return <li>{x.name}
            <ul>
                {x.todo.map((y,z)=>{
                    return <li>{y.name}</li>
                })}
            </ul>
        </li>
    })}
</li>  

</ul> */}
                     <ul >
                      <li>{display}</li>   
                         </ul>       


             </form>

             <div>
                <button className="my-button" onClick={this.addList}>+ List item</button>
            </div>



            </div>
        )
    }
}
