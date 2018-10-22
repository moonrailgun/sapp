import * as React from 'react'
import Base, { Props as BaseProps } from './Base'

export interface Props extends BaseProps {
  text: string;
}

export default class Text extends Base<Props> {
  tagName = 'Text'
  label = '文本框'
  summary = '一个简单的富文本'

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
}
