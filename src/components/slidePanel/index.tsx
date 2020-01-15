import * as React from "react";
import "./slidePanel.css";

interface SliderProps {
  visible: boolean;
}

export default class Panel extends React.Component<{}, SliderProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      visible: false
    };
  }
  render() {
    const { visible } = this.state;
    const animated = visible ? "animated" : "";

    return (
      <div
        className={`panel-wrap ${animated}`}
        onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}
      >
        <div className={`panel-icon ${animated}`}>{visible ? " < " : " > "}</div>
        <div className="panel-layer">{this.props.children}</div>
      </div>
    );
  }
}
