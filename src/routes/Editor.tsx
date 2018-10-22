import * as React from 'react'
import ElementList from '../components/editor/ElementList'
import PageLayout from '../components/editor/PageLayout'
import OutlineView from '../components/editor/OutlineView'
import ElementAttribute from '../components/editor/ElementAttribute'
import SplitPane from "react-split-pane";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Editor extends React.Component {
  render () {
    return (
      <div className="sapp-editor">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              编辑器
            </Typography>
          </Toolbar>
        </AppBar>
        <SplitPane split="vertical" minSize={240} defaultSize={240} maxSize={500}>
          <SplitPane split="horizontal" minSize={100} defaultSize={400} maxSize={500}>
            <OutlineView />
            <ElementList />
          </SplitPane>
          <SplitPane split="vertical" primary="second" minSize={240} defaultSize={240} maxSize={500}>
            <PageLayout isLayout={true} />
            <ElementAttribute />
          </SplitPane>
        </SplitPane>
      </div>
    )
  }
}

export default Editor
