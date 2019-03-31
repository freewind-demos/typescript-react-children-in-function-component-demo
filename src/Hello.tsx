//import * as React from 'react'
import React from 'react'
import Panel from "./Message";

class Hello extends React.Component {
  render() {
    return <div>
      <Panel>
        <h1>Hello React</h1>
        <div>Function Component</div>
      </Panel>
    </div>
  }
}

export default Hello
