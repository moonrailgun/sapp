import * as React from 'react'

export interface Props {
  isLayout?: boolean;
  xml: string;
}

export default class PageLayout extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    xml: ''
  }

  renderPage(_xml:string) {
    // TODO
    return (
      <div className="preview" onDragOver={(e) => console.log(e)}>
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
