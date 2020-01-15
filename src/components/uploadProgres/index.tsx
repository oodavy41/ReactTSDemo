import * as React from "react";
import "./progress.css";

interface ProgressProps {
  progress: number;
  key: number;
  onClose: () => void;
}
export default class Progress extends React.Component<ProgressProps> {
  render() {
    const { progress, key, onClose } = this.props;
    return (
      <div className={`progress-wrap`}>
        <div className={`progress-outer`}>
          {Math.round(progress * 100)}%
          <div className={`progress-inner`} style={{ transform: `translateX(${Math.round(progress * 100) - 100}%)` }}></div>
        </div>
        <button className={`progress-close`} onClick={onClose}>
          ×
        </button>
      </div>
    );
  }
}
