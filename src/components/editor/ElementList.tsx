import * as React from 'react'
import elements from '../elements'

class ElementList extends React.Component {
  getList() {
    return elements.map(item => {
      let {
        label,
        list
      } = item

      return list.map(Element => (
        <Element key={'icon_'+label} view="sketch" />
      ))
    })
  }

  render() {
    return (
      <div className="element-list">
        {this.getList()}
      </div>
    )
  }
}

export default ElementList
