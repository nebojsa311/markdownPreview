import React from 'react';
import './index.css';



let marked = require("marked")
class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {markdownV: ''}
  }
  
  

  render(){
    return(
      <div>
        <div>
  <textarea id="editor" onChange={(event)=>this.setState({markdownV: event.target.value})} placeholder="Enter markdown"></textarea>
        </div>
        <div id="preview">
          <p dangerouslySetInnerHTML={{__html: marked(this.state.markdownV)}}></p>
        </div>
      </div>
    )
  }
}

export default App;
