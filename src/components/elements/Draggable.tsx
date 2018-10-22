import * as React from 'react'

interface Props {
  children: any;
  data?: object;
}

// 可拖拽元素
class Draggable extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  _handleDragStart(e: React.DragEvent<HTMLDivElement>): void {
    e.dataTransfer.setData('DraggedElementFunc', this.props.children.type)
    e.dataTransfer.setData('data', JSON.stringify(this.props.data))
  }

  render() {
    return (
      <div
        draggable={true}
        onDragStart={(e) => this._handleDragStart(e)}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Draggable;
