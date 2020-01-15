import * as React from "react";
import "./uploader.css";

interface inputUploadProps {
  popFileArray: (filelist: FileList) => void;
}

interface inputUploadStates {
  draging: boolean;
}

const DragEndEvents = ["dragend", "drop", "dragexit", "dragleave"];

export default class InputUpload extends React.Component<inputUploadProps, inputUploadStates> {
  inputer: HTMLInputElement;
  label: HTMLLabelElement;

  constructor(props: inputUploadProps) {
    super(props);
    this.state = {
      draging: false
    };
  }
  componentDidMount() {
    this.inputer && this.inputer.addEventListener("change", this.onInputChange);

    this.label && this.label.addEventListener("dragenter", this.onDrag);
    DragEndEvents.forEach(value => {
      this.label && this.label.addEventListener(value, this.endDrag);
    });
  }

  componentWillUnmount() {
    this.inputer && this.inputer.removeEventListener("change", this.onInputChange);

    this.label && this.label.removeEventListener("dragenter", this.onDrag);
    DragEndEvents.forEach(value => {
      this.label && this.label.removeEventListener("value", this.endDrag);
    });
  }

  render() {
    const { draging } = this.state;
    return (
      <div className={`uploader-input `}>
        <label
          ref={ref => (this.label = ref)}
          className={`uploader-input-element ${draging ? "uploader-draging" : ""}`}
          htmlFor="uploader-input-html"
        >
          点击上传或拖入视频文件
          <input
            className={`uploader-input-html`}
            id="uploader-input-html"
            ref={ref => (this.inputer = ref)}
            type="file"
            name="video"
            accept="video/*"
            multiple={true}
          />
        </label>
      </div>
    );
  }

  onInputChange = (event: Event) => {
    const { popFileArray } = this.props;
    popFileArray(this.inputer.files);
  };
  onDrag = () => {
    this.setState({ draging: true });
  };
  endDrag = () => {
    console.log("END");
    this.setState({ draging: false });
  };
}
