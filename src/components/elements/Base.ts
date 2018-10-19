import * as React from 'react'

export interface Props {
  view: ViewType;
}

export default class Base<P extends Props, S = {}> extends React.Component<P, S> {
  static tagName = '';
  static label = '';

  getXML(): string {
    return '';
  }

  getInspect(): (JSX.Element | null) {
    return null;
  }

  getView(): (JSX.Element | null) {
    return null;
  }

  getIcon(): (JSX.Element | null) {
    return null;
  }

  render() {
    let { view } = this.props
    switch (view) {
      case 'icon':
        return this.getIcon();
      default:
        return null;
    }
  }
}
