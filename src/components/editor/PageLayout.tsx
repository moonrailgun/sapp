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
    return null;
  }

  render () {
    const {
      isLayout,
      xml,
    } = this.props;

    if(!isLayout) {
      return (
        <iframe src="/page/" title="preview" />
      )
    }

    return this.renderPage(xml)
  }
}
