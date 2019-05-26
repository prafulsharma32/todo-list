import React from 'react';
import logo from './logo.svg';
import './App.css';
import { defaultCoreCipherList } from 'constants';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './paper.css'

//  1) function App(props)
//  {  
//    return (<div>
//    <h1>{props.msg[0]}</h1>
//   <h1>{props.msg[1]}</h1>
//     </div>)
// }
// function OtherComponent(props)
// { const msg=1;
//   if(msg)
//   return (<p className={props.cName}> message </p>)
//   else
//   return (
//   <p className={props.cName}> no message to show</p>
//   ) }
//   function Listdemo(props) {

//     var arr=[];
//     for(let i=0;i<props.name.length;i++)
//     { {arr.push(<li className="list-group-item">{props.name[i]}</li>)} 
//   }
//   return <ul className="list-group">{arr}</ul>
//   }
// function Parent()
// { return (
//   <div>
//   <App msg={["First Message","Second Message"]}></App>
//   <OtherComponent cName="styled" ></OtherComponent>
//   <Listdemo name={["Item1","Item2","Item3","Item4"]} ></Listdemo>
// </div>
// )
// } 

// export default Parent;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newlist: this.props.obj,
      newItem: '',
      number:0
    }
    this.setStatus=this.setStatus.bind(this)
    this.up=this.up.bind(this)
    this.down=this.down.bind(this)
    this.delete=this.delete.bind(this)
  }
  getList(props) {
    let items = [];
     for (var item of this.props.obj)
       items.push(<List1 item={item} setStatus={this.setStatus} up={this.up} down={this.down} delete={this.delete}> </List1>)
  //  items=this.props.neWlist.map(<list1 item={item} setStatus={this.setStatus}> (item)=>{item}</list1>)
    return items;
  }
  getValue(e) {
    console.log(e.target.value)
    this.state.newItem = e.target.value;
  }

  setValue(e){
    if (this.state.newItem !== "" && this.state.newItem.trim()) {
      let l = this.state.newlist;
    
      let object = { name: this.state.newItem, status: false }
      l.push(object)
     this.setState(
        {
          newlist: l, newItem: ""})  
     
    } 
    document.getElementById("textarea").value = ''
  }
  number(item)
  {
    let x=this.state.newlist
     let i=x.indexOf(item)
    let n=0
     if(x[i].this.state.newlist.status==true)
      { n++ }
      if(x[i].this.state.newlist.status==false)
      { n-- }
     this.setState(
        {
         number:n
        })
  }
    
  setStatus(item) {
    console.log(item)
    let l = this.state.newlist
    let i = l.indexOf(item)
    l[i].status = !l[i].status;
    this.setState(
      {
        newlist: l
      })
   let n =this.state.number
    if(l[i].status)
    { n++ }
    else
      { n-- }
      this.setState(
        { number:n}
      )
    }
  
    
  up(item)
  { let x=this.state.newlist;
  let i=x.indexOf(item)
   if(i!==0)
  {
    [x[i],x[i-1]]=[x[i-1],x[i]]
  }
  else
  alert("already at the top")
  this.setState(
    {
      newlist:x
    }
  )
  }
  down(item)
  {
    let x= this.state.newlist;
    let i = x.indexOf(item)
    if(i!==this.props.obj.length-1)
  {
    [x[i],x[i+1]]=[x[i+1],x[i]]
  }
  else
  alert("already at the bottom")
  this.setState(
    {
      newlist:x
    }
  )
  }
  delete(item)
  { let x= this.state.newlist;
    let i = x.indexOf(item)
    alert("do you surely wanna delete?")
    x.splice(i,1);
this.setState(
  {newlist:x}
)
  }
  

  render() {
    return <div>
      <div className="row flex-center" ><h1>ToDo list </h1></div>
    <div style={{display:'flex'}} className="row flex-center" >        
    <input type="text" id="textarea" onChange={this.getValue.bind(this)}></input> 
      <button onClick={this.setValue.bind(this)} className="btn-outline-info">Add item </button>
      </div>
      <h3 className="row flex-center">completed items:{this.state.number}/{this.state.newlist.length}></h3>
      <div> <ul className="list-group">{this.getList()}</ul>
    </div>
    </div>
  }
}
 class List1 extends React.Component {
  
   constructor(props){
     super(props);
   }

   render() {
     return <div style={{display:'flex'}}>
       <li className= {this.props.item.status?"paper paper-btn btn-block btn-success":"paper paper-btn btn-block btn-danger"} onClick={() => this.props.setStatus(this.props.item)}> {this.props.item.name}</li>
    <button className="btn-success" onClick={()=> {this.props.up(this.props.item)}}>Up</button>   
    <button className="btn-warning" onClick={()=>{this.props.down(this.props.item)}} >Down</button> 
    <button className="btn-danger" onClick={()=>{this.props.delete(this.props.item)}} >x</button>
     </div>
   }
 }
 export default App;
