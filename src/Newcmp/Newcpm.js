import React, { Component } from 'react'

export default class Newcpm extends Component {
    constructor(props){
        super(props);
        this.handlefun=this.handlefun.bind(this);
    }
    handlefun(value){
        alert(value);
    }
  render() {
    return (
      <div>
        <h1>{"Child component..."}</h1>
        <button onClick={()=>this.handlefun(this.props.name)}>parent</button>
        <button onClick={()=>this.props.fun("child to parent")}>child</button>
      </div>
    )
  }
}

// import React from 'react'

// export default function Newcpm(props) {
//     function parentcmp(){
//         alert(props.name)
//     }
//   return (
//     <div>
//       <h2>{"child component"}</h2>
//       <button onClick={parentcmp}>click btn</button>
//       <button onClick={()=>props.fun("hello my name is mohit joshi...")}>click btn...</button>
//     </div>
//   )
// }

