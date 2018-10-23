import * as React from 'react'
import { stringToFunc } from "../../utils/iframeHelper";
import { getPersistenceXML, xml2obj } from "../../utils/xmlHelper";
import PreviewRender from "./PreviewRender";

export interface Props {
  isIFrame?: boolean;
}
export interface State {
  layout: object;
}

export default class PageLayout extends React.Component<Props, State> {
  xml: string;

  constructor(props: Props) {
    super(props);
    this.state = {
      layout: {},
    };
  }

  _handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault(); // 允许拖动
    // TODO: 显示指示器
  }

  _handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const DraggedElementFunc = e.dataTransfer.getData('DraggedElementFunc');
    const DraggedElement = stringToFunc(DraggedElementFunc);
    console.log('drop element', DraggedElement)

    // TODO
  }

  _handleIFrameLoaded(_e: React.SyntheticEvent<HTMLIFrameElement>) {
    let iframe = (window as any).iframe;
    iframe && iframe.transferXML && iframe.transferXML(this.xml)
  }

  renderPage(layout:object) {
    // TODO
    return (
      <div
        className="preview"
        onDragOver={(e) => this._handleDragOver(e)}
        onDrop={(e) => this._handleDrop(e)}
      >
        {/* TODO: xml渲染 */}
        <PreviewRender layout={layout} />
      </div>
    );
  }

  componentDidMount() {
    if(this.props.isIFrame) {
      this.xml = getPersistenceXML();
    }else {
      // 创建全局方法用于接受数据
      (window as any).transferXML = (xml: string) => {
        console.log('接收到来自父级的xml数据:', xml);
        xml2obj(xml).then((res) => {
          this.setState({layout: res});
        }).catch(e => {
          console.error('编译失败:', e)
        })
      }
    }
  }

  render () {
    const {
      isIFrame,
    } = this.props;

    if(isIFrame) {
      return (
        <iframe
          ref="iframe"
          name="iframe"
          className="preview-iframe"
          src="/page/"
          title="preview"
          onLoad={(e) => this._handleIFrameLoaded(e)}
        />
      )
    }

    return this.renderPage(this.state.layout);
  }
}
