import * as React from 'react'
import ElementList from '../components/editor/ElementList'
import PageLayout from '../components/editor/PageLayout'

class Editor extends React.Component {
  render () {
    return (
      <div className="sapp-editor">
        <ElementList />
        <PageLayout isLayout={true} />
      </div>
    )
  }
}

export default Editor
