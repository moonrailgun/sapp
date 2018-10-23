import * as React from 'react'

export interface Props {
  layout: object;
}

export default class PreviewRender extends React.Component<Props> {
  render () {
    const {
      layout,
    } = this.props;

    return (
      <div>{JSON.stringify(layout)}</div>
    )
  }
}
