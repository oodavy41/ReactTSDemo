import * as React from "react";
import "./pageContainer.css";

export default class PagePanel extends React.Component<{ title: string }, {}> {
  render() {
    const { title } = this.props;
    return (
      <div className={`page-panel-wrap`}>
        <div className={`page-panel-title `}>{title}</div>
        <div className={`page-panel-container `}>{this.props.children}</div>
      </div>
    );
  }
}
