import React, { Component } from 'react'

class PageLayout extends Component {
  renderPage(xml) {
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

export default PageLayout
