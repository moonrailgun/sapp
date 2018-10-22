import * as React from 'react'

export default class List extends React.Component {
  render() {
    return (
      <div className="sapp-list">
        {this.props.children}
      </div>
    )
  }
}
