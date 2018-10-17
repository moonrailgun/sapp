import React from 'react'

export default class Base extends React.Component {
  static tagName = '';
  static label = '';

  getXML() {
    return null;
  }

  getInspect() {
    return null;
  }

  getView() {
    return null;
  }

  getIcon() {
    return null;
  }

  render() {
    let {view} = this.props
    switch (view) {
      case 'icon':
        return this.getIcon();
      default:
        return null;
    }
  }
}
