import * as React from "react";
import "./uploader.css";
import InputUL from "./inputUpload";

interface uploaderProps {
  popFiles: (file: FileList) => void;
}

export default class PagePanel extends React.Component<uploaderProps, {}> {
  render() {
    const { popFiles } = this.props;
    return (
      <div className={`uploader-wrap`}>
        <InputUL popFileArray={popFiles}></InputUL>
      </div>
    );
  }
}
