import * as React from "react";
import "./uploader.css";
interface dropUploadProps {
  popFileArray: Function;
}
interface dropUploadState {
  visiable: boolean;
}
export default class DropUpload extends React.Component<dropUploadProps, dropUploadState> {
  mine: HTMLDivElement;

  constructor(props: dropUploadProps) {
    super(props);
    this.state = {
      visiable: false
    };
  }
  componentDidMount() {
    console.log(this.mine);
    this.mine && this.mine.addEventListener("drop", this.onDrop, false);
    this.mine && this.mine.addEventListener("drag", this.onDrag, false);
    this.mine && this.mine.addEventListener("dragend", this.endDrag, false);
  }
  render() {
    return (
      <div
        ref={ref => (this.mine = ref)}
        className="uploader-drop"
        style={{ visibility: this.state.visiable ? "visible" : "hidden" }}
      >
        <h2 className="uploader-drop-ps">drop files here</h2>
      </div>
    );
  }

  stopEvent(e: Event) {
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  }

  onDrag = (e: DragEvent) => {
    this.stopEvent(e);
    this.setState({ visiable: true });
  };
  endDrag = (e: DragEvent) => {
    this.stopEvent(e);
    this.setState({ visiable: false });
  };
  onDrop = (e: DragEvent) => {
    this.stopEvent(e);
    const { popFileArray } = this.props;
    const files = e.dataTransfer.files;
    popFileArray(files);
  };
}
