import React from 'react'
import Base from './Base'

export default class Text extends Base {
  tagName = 'Text'
  label = '文本框'

  getXML() {
    return `
      <Text>此处输入文本</Text>
    `
  }

  getInspect() {
    return (
      <div>
        <span>此处是文本框的编辑菜单</span>
      </div>
    )
  }

  getView() {
    return (
      <div>{this.props.text}</div>
    )
  }

  getIcon() {
    return (
      <div>文本</div>
    )
  }
}
