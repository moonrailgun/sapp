import * as React from 'react'
import { stringToFunc } from "../../utils/iframeHelper";

export interface Props {
  isLayout?: boolean;
  xml: string;
}

export default class PageLayout extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    xml: ''
  }

  _handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault(); // 允许拖动
    // TODO: 显示指示器
  }

  _handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const DraggedElementFunc = e.dataTransfer.getData('DraggedElementFunc');
    const DraggedElement = stringToFunc(DraggedElementFunc);
    console.log('drop element', DraggedElement)
  }

  renderPage(_xml:string) {
    // TODO
    return (
      <div
        className="preview"
        onDragOver={(e) => this._handleDragOver(e)}
        onDrop={(e) => this._handleDrop(e)}
      >
        {/* TODO: xml渲染 */}

      </div>
    );
  }

  render () {
    const {
      isLayout,
      xml,
    } = this.props;

    if(isLayout) {
      return (
        <iframe className="preview-iframe" src="/page/" title="preview" />
      )
    }

    return this.renderPage(xml)
  }
}
