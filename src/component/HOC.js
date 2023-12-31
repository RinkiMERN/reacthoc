import React, {useState} from 'react'

const HOC = (WrappedComponent)=>{
  
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        increment = ()=>{
            this.setState(prevState => { return {count: prevState.count + 1}})
        }
        render() {
           return <WrappedComponent count={this.state.count} increment={this.increment}/>
        }
    }

    return NewComponent;
}

export default HOC