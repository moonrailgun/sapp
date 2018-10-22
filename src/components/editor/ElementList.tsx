import * as React from 'react'
import elements from '../elements'
import List from "../List";
import Cell from "../Cell";

class ElementList extends React.Component {
  getList() {
    return elements.map(item => {
      let {
        label,
        list
      } = item

      return (
        <List key={'icon_'+label}>
          {
            list.map((Element, index) => (
              <Cell key={'icon_'+label+'_'+index}>
                  <Element view="sketch" />
              </Cell>
            ))
          }
        </List>
      )
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
