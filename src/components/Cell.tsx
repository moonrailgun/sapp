import * as React from 'react'

export default class Cell extends React.Component {
  render() {
    return (
      <div className="sapp-list-cell">
        {this.props.children}
      </div>
    )
  }
}
