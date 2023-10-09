import logo from './logo.svg';
import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

import React, { Component } from 'react'
import Newcpm from './Newcmp/Newcpm';

const newarr=[12212,121232,454564,5675675,678678];
export default class App extends Component {
  constructor(ch){
    super(ch);
    this.childfun=this.childfun.bind(this);
    this.state={
      value:"state use...",
      id:"sdsdfdfg",
      arr:[112,34,45456],
      // money:2000,
      color:"red",
      show:false
    }
  }
  //lifecycle methods...

  // static getDerivedStateFromProps(props,state){
  //   return{
  //     money:5000
  //   }
  // }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({money:"1000000"})
  //   },2000)
  // }
  // getSnapshotBeforeUpdate(prevProps,prevState){
  //   {this.prevState.money}
  // }

  // shouldComponentUpdate(nextProps){
  //   return nextProps.value!==this.Props.value?true:false 
  // }

  // componentDidUpdate(){
  //   {this.state.money}
  // }


  // life cycle methods end...
  updatestate=()=>{this.setState({value:"mohit",id:"mohit",arr:[11,22,33,44,55,66]})}
  childfun(val){
    alert(val);
  }
  render() {
    const {value,id,arr}=this.state;
    const arr1=[];
    for(var i=0;i<newarr.length;i++){
      <li key={i.toString()}>{arr1.push(newarr[i])}</li>
    }
    return (
      <div>
        <h1>{"parent component..."}</h1>
        <Newcpm name="parent to child" fun={this.childfun}/>
        <h1>{this.state.value},{this.state.id},{this.state.arr}</h1>
        <button onClick={this.updatestate}>updatestate</button>
        <ul>{arr1.join(",")}</ul>
        <p>you have amount {this.state.money}</p>
        <button onClick={()=>this.setState({color:"black"})}>shouldComponentUpdate</button>

        <button onClick={() => this.setState({ show: true })}>Get Users</button>
        {this.state.show ? <User money="1000" /> : null}
      </div>
    )
  }
}
//multiple class
class User extends React.Component {
  constructor() {
    super()
    this.state = {
      money: 2000,
    }
  }

  componentDidMount() {
    this.setState({ amount: this.props.money })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // previous state
    document.getElementById('previous').innerHTML =
      'Previous Amount: ' + prevState.money
  }

  componentDidUpdate() {
    // current state
    document.getElementById('new').innerHTML =
      'Current Amount: ' + this.state.money
  }


  render() {
    return (
      <div>
        <div id="previous">Previous Amount: </div>
        <div id="new">New Amount: </div>
      </div>
    )
  }
}
//multiple class end ...

// import React from 'react';
// import Newcpm from './Newcmp/Newcpm';

// export default function App() {
//   function childcmp(val){
//     alert(val)
//   }
//   return (
//     <div>
//       <h1>{"parent hello"}</h1>
//       <Newcpm name="bridgefix..." fun={childcmp}></Newcpm>
//     </div>
//   )
// }


