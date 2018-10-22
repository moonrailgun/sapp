import * as React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export interface Props {
  view: ViewType;
}

export default class Base<P extends Props, S = {}> extends React.Component<P, S> {
  static tagName = ''; // xml标签名
  label = ''; // 显示名
  summary = ''; // 简述

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

  getSummary(): (JSX.Element | string) {
    return this.summary;
  }

  getSketch(): JSX.Element {
    return (
      <div>
        <Tooltip title={this.getSummary()} placement="right">
          <div>
            {this.getIcon()}
            {this.label}
          </div>
        </Tooltip>
      </div>
    )
  }

  render() {
    let { view } = this.props
    switch (view) {
      case 'sketch':
        return this.getSketch();
      default:
        return null;
    }
  }
}
