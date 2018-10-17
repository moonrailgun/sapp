import React, { Component } from 'react'

class PageLayout extends Component {
  renderPage(xml) {

  }

  render () {
    const {
      isLayout,
      xml,
    } = this.props;

    if(!isLayout) {
      return (
        <iframe src="/page/" />
      )
    }

    return renderPage(xml)
  }
}

export default PageLayout
