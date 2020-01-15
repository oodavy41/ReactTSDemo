import * as React from "react";
import "./upload.css";

import Page from "@components/pageContainer";
import Uploader from "@components/uploader";
import ProgressBar from "@components/uploadProgres";
import fileObj from "@utils/fakeObj";
import originObj from "@utils/progressObj";

interface uploadStates {
  fileArray: Array<originObj>;
}

export default class Upload extends React.Component<{}, uploadStates> {
  uploadCounter = 0;
  errorCounter = 0;

  constructor(props: uploadStates) {
    super(props);
    this.state = {
      fileArray: []
    };
  }
  render() {
    return (
      <Page title="Upload Page">
        <Uploader popFiles={this.pushFiles}></Uploader>
        <ol className="upload-list">
          {this.state.fileArray.map((file, index) => {
            return (
              <li key={index}>
                {file.name}
                <ProgressBar
                  progress={file.progress}
                  key={index}
                  onClose={() => {
                    this.removeFile(index);
                  }}
                ></ProgressBar>
              </li>
            );
          })}
        </ol>
      </Page>
    );
  }

  pushFiles = (file: FileList) => {
    const array = this.state.fileArray;
    for (let i = 0; i < file.length; i++) {
      this.uploadCounter++;
      let obj = new fileObj(file.item(i), this.onUploadClose, this.onError, () => {
        this.setState({ ...this.state });
      });
      array.push(obj);
    }
    this.setState({ fileArray: array });
  };
  removeFile = (index: number) => {
    const array = this.state.fileArray;
    const removed = array.splice(index, 1);
    removed[0].abort();
    this.setState({ fileArray: array });
  };

  onUploadClose = () => {
    this.uploadCounter--;
    if (this.uploadCounter <= 0) {
      setTimeout(() => {
        alert(`上传成功! ${this.errorCounter} 个失败`);
      }, 500);
    }
  };
  onError = () => {
    this.errorCounter++;
    this.onUploadClose();
  };
}
